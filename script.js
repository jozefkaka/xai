const input = document.getElementById("messageInput");
const messages = document.getElementById("messages");
const welcome = document.getElementById("welcome");

function sendMessage() {
const text = input.value.trim();

if (text === "") return;

welcome.style.display = "none";
messages.style.display = "block";

addMessage(text, "user");

input.value = "";
input.style.height = "auto";

setTimeout(() => {
    addMessage(
        "سلام! من KAKA AI هستم 🤖\n\nفعلاً نسخه‌ی اولیه‌ی من فعال است. در مرحله‌ی بعد مغز هوش مصنوعی واقعی را به سایت وصل می‌کنیم.",
        "ai"
    );
}, 700);

}

function addMessage(text, type) {

const message = document.createElement("div");

message.className =
    type === "user"
        ? "message user-message"
        : "message";

const avatar = document.createElement("div");

avatar.className = "message-avatar";
avatar.textContent =
    type === "user"
        ? "👤"
        : "✦";

const content = document.createElement("div");

content.className = "message-content";
content.textContent = text;

message.appendChild(avatar);
message.appendChild(content);

messages.appendChild(message);

messages.scrollTop = messages.scrollHeight;

}

function setPrompt(text) {
input.value = text;
input.focus();
}

function newChat() {
messages.innerHTML = "";
messages.style.display = "none";
welcome.style.display = "block";
input.value = "";
}

function clearChat() {
newChat();
}

function toggleSidebar() {
document
.querySelector(".sidebar")
.classList.toggle("active");
}

function toggleTheme() {
document.body.classList.toggle("light-mode");
}

function handleKey(event) {
if (event.key === "Enter" && !event.shiftKey) {
event.preventDefault();
sendMessage();
}
}

input.addEventListener("input", () => {
input.style.height = "auto";
input.style.height = input.scrollHeight + "px";
});
