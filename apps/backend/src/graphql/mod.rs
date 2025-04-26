use crate::config::Config;
use async_graphql::{http::GraphiQLSource, EmptyMutation, EmptySubscription, MergedObject, Schema};
use async_graphql_axum::GraphQL;
use axum::{
    response::{Html, IntoResponse},
    routing::get,
    Extension, Router,
};
use sqlx::PgPool;
use std::sync::Arc;
use tokio::{self, net::TcpListener};
use tower::ServiceBuilder;
use tower_http::trace::TraceLayer;
use types::ApiContext;

mod types;

mod threads;
mod users;

pub async fn serve(config: Config, db: PgPool) -> anyhow::Result<()> {
    let api_context = Arc::new(ApiContext { config, db });

    let app = api_router(api_context.clone()).layer(
        ServiceBuilder::new()
            .layer(Extension(api_context.clone())) // for http ep}
            //
            // Enables logging. Use `RUST_LOG=tower_http=debug`
            .layer(TraceLayer::new_for_http()),
    );

    let listener = TcpListener::bind(&api_context.config.host).await?;
    println!("[main]: Listening on {}\n", &api_context.config.host);

    axum::serve(listener, app).await?;
    Ok(())
}

async fn graphiql() -> impl IntoResponse {
    Html(GraphiQLSource::build().endpoint("/").finish())
}

#[derive(MergedObject, Default)]
struct RootQuery(users::UsersQuery, threads::ThreadsQuery);

fn api_router(api_context: Arc<ApiContext>) -> Router {
    let schema = Schema::build(RootQuery::default(), EmptyMutation, EmptySubscription)
        .data(api_context)
        .finish();

    Router::new().route("/", get(graphiql).post_service(GraphQL::new(schema)))
}
