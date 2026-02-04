from fastapi import FastAPI
from app.api.routes import chat, upload

app = FastAPI(title="Smart AI Enterprise Platform")

app.include_router(chat.router, prefix="/api/chat")
app.include_router(upload.router, prefix="/api/upload")

@app.get("/")
def health():
    return {"status": "AI Service Running"}
