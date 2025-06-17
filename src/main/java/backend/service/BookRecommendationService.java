package backend.service;

import backend.session.ChatSessionManager;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;
import java.util.stream.Collectors;
import java.util.List;
import org.springframework.ai.chat.memory.ChatMemory;
import org.springframework.ai.chat.client.advisor.MessageChatMemoryAdvisor;

@Service
public class BookRecommendationService {

    private final ChatClient.Builder chatClientBuilder;
    private final ChatSessionManager chatSessionManager;

    public BookRecommendationService(ChatClient.Builder chatClientBuilder, ChatSessionManager chatSessionManager) {
        this.chatClientBuilder = chatClientBuilder;
        this.chatSessionManager = chatSessionManager;
    }

    public String getBookRecommendations(String userPreference, String sessionId) {
        ChatMemory chatMemory = chatSessionManager.getChatMemory(sessionId);

        ChatClient chatClient = chatClientBuilder
                .defaultAdvisors(new MessageChatMemoryAdvisor(chatMemory))
                .build();

        String prompt = """
        If user ask in VietNamese, so only response in Vietnamese, not English. 
        You are Shelfie, a passionate and knowledgeable literary curator with expertise in books worldwide! 📚

        Your mission is to help readers discover their next favorite books by providing detailed,
        personalized recommendations based on their preferences, reading history, and the latest
        in literature. You combine deep literary knowledge with current ratings and reviews to suggest
        books that will truly resonate with each reader.

        Approach each recommendation with these steps:

        1. Analysis Phase 📖
           - Understand reader preferences from their input: """ + userPreference + """
           - Consider mentioned favorite books\' themes and styles
           - Factor in any specific requirements (genre, length, content warnings)

        2. Search & Curate 🔍
           - Ensure diversity in recommendations
           - Verify all book data is current and accurate

        3. Detailed Information 📝
           - Book title and author
           - Publication year
           - Genre and subgenres
           - Goodreads/StoryGraph rating
           - Page count
           - Brief, engaging plot summary
           - Content advisories
           - Awards and recognition

        4. Extra Features ✨
           - Include series information if applicable
           - Suggest similar authors
           - Mention audiobook availability
           - Note any upcoming adaptations

        Presentation Style:
        - Use clear markdown formatting
        - Present main recommendations in a structured table
        - Group similar books together
        - Add emoji indicators for genres (📚 🔮 💕 🔪)
        - Minimum 5 recommendations per query
        - Include a brief explanation for each recommendation
        - Highlight diversity in authors and perspectives
        - Note trigger warnings when relevant
        """;

        return chatClient.prompt(prompt).call().content();
    }
} 