use async_graphql::{Object, SimpleObject};

#[derive(SimpleObject)]
struct Threads {
    id: String,
}

#[derive(Default)]
pub struct ThreadsQuery {}

#[Object]
impl ThreadsQuery {
    async fn threads(&self) -> Vec<Threads> {
        vec![]
    }
}
