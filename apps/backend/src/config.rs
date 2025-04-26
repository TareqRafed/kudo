use clap::Parser;

/// Args could be passed from CLI or used from `.env` file
/// See `.env.example` in the project root for details.
#[derive(Parser, Clone)]
pub struct Config {
    /// The connection URL for the Postgres database this application should use.
    #[clap(long, env)]
    pub database_url: String,

    /// Defaults to `0.0.0.0:8000`
    #[clap(long, env, default_value = "0.0.0.0:8000")]
    pub host: String,
}
