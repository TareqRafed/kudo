use anyhow::Context;
use clap::Parser;
use kudo_backend::config::Config;
use kudo_backend::graphql;
use sqlx::postgres::PgPoolOptions;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    dotenv::dotenv().ok();
    env_logger::init();

    // will throw error if no env or cli commands were passed
    let config = Config::parse();

    let db = PgPoolOptions::new()
        .max_connections(35)
        .connect(&config.database_url)
        .await
        .context("could not connect to database_url")?;

    // pull migrations first
    // sqlx::migrate!().run(&db).await?;

    graphql::serve(config, db).await?;

    Ok(())
}
