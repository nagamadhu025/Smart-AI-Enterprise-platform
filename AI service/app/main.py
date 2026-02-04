from fastapi import FastAPI
from app.api.routes import chat, upload

app = FastAPI(title="Smart AI Enterprise Platform")

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

app.include_router(chat.router, prefix="/api/chat")
app.include_router(upload.router, prefix="/api/upload")

@app.get("/")
def health():
    return {"status": "AI Service Running"}
