import urllib.request
import json
import sys

def verify():
    try:
        # Health check
        print("Checking Health Endpoint...")
        with urllib.request.urlopen("http://127.0.0.1:8000/") as response:
            print(f"Health: {response.getcode()} {response.read().decode()}")

        # Chat check
        print("Checking Chat Endpoint...")
        url = "http://127.0.0.1:8000/api/chat/"
        data = json.dumps({"messages": [{"role": "user", "content": "Hello check"}]}).encode("utf-8")
        req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
        with urllib.request.urlopen(req) as response:
            print(f"Chat: {response.getcode()} {response.read().decode()}")
            
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    verify()
