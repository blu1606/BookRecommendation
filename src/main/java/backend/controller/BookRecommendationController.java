package backend.controller;

import backend.model.ChatRequest;
import backend.model.ChatResponse;
import backend.service.BookRecommendationService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/books")
public class BookRecommendationController {

    private final BookRecommendationService bookRecommendationService;

    public BookRecommendationController(BookRecommendationService bookRecommendationService) {
        this.bookRecommendationService = bookRecommendationService;
    }

    @PostMapping("/recommend")
    public ChatResponse getRecommendations(@RequestBody ChatRequest request) {
        String result = bookRecommendationService.getBookRecommendations(request.prompt, request.sessionChatId);
        return new ChatResponse(result);
    }
} 