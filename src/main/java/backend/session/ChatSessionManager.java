package backend.session;

import org.springframework.ai.chat.memory.ChatMemory;
import org.springframework.ai.chat.memory.InMemoryChatMemory;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class ChatSessionManager {

    private final Map<String, ChatMemory> chatMemories = new ConcurrentHashMap<>();

    public ChatMemory getChatMemory(String sessionId) {
        return chatMemories.computeIfAbsent(sessionId, id -> new InMemoryChatMemory());
    }
} 