use std::sync::Arc;

use async_graphql::{Context, Object, SimpleObject};
use sqlx::types::Uuid;

use crate::graphql::ApiContext;

#[derive(SimpleObject)]
struct User {
    id: String,
}

#[derive(Default)]
pub struct UsersQuery {}

#[Object]
impl UsersQuery {
    async fn users<'ctx>(&self, ctx: &Context<'ctx>) -> Result<Vec<User>, async_graphql::Error> {
        let data = ctx.data::<Arc<ApiContext>>()?;

        let row: (Uuid,) = sqlx::query_as("SELECT id FROM members LIMIT 1")
            .fetch_one(&data.db)
            .await?;

        Ok(vec![User {
            id: row.0.to_string(),
        }])
    }
}
