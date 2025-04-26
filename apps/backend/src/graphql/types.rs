use sqlx::PgPool;

use crate::config::Config;

#[derive(Clone)]
pub struct ApiContext {
    pub config: Config,
    pub db: PgPool,
}
