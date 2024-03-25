from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def get_hello():
    return "Hello welt"

@app.get("/goods/clothes")
async def get_tshirts():
    return "m"