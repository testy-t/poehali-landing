import { ChatGPTPlaygroundPage } from "@/components/extensions/chatgpt-polza/ChatGPTPlaygroundPage";

const API_URL = "https://functions.poehali.dev/84dd9176-29cd-4374-a31a-f30e4fcbc03e";

export default function ChatGPT() {
  return (
    <ChatGPTPlaygroundPage
      apiUrl={API_URL}
      defaultModel="openai/gpt-4o-mini"
    />
  );
}
