import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { prompt, sessionChatId, apiKey } = await request.json()

    if (!prompt || !sessionChatId || !apiKey) {
      return NextResponse.json({ error: "Prompt, sessionChatId, and apiKey are required" }, { status: 400 })
    }

    console.log("Making request to backend with:", { prompt, sessionChatId })

    // Call the backend API with sessionChatId
    const response = await fetch("https://book-reco-be.onrender.com/api/books/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        prompt,
        sessionChatId,
      }),
    })

    console.log("Backend response status:", response.status)
    console.log("Backend response headers:", Object.fromEntries(response.headers.entries()))

    // Get response text first
    const responseText = await response.text()
    console.log("Backend response text:", responseText)

    if (!response.ok) {
      console.error(`Backend API error: ${response.status} - ${responseText}`)

      // Try to parse as JSON, fallback to text
      let errorMessage = "Unknown error occurred"
      try {
        const errorData = JSON.parse(responseText)
        errorMessage = errorData.message || errorData.error || responseText
      } catch {
        errorMessage = responseText || `HTTP ${response.status} error`
      }

      return NextResponse.json(
        {
          error: "Backend API error",
          recommendation: `Xin lỗi, đã có lỗi từ server: ${errorMessage}. Vui lòng kiểm tra API key và thử lại.`,
        },
        { status: response.status },
      )
    }

    // Try to parse response as JSON
    let data
    try {
      data = JSON.parse(responseText)
    } catch (parseError) {
      console.error("Failed to parse response as JSON:", parseError)
      console.error("Response text:", responseText)

      // If it's not JSON, treat the text as the recommendation
      return NextResponse.json({
        recommendation: responseText || "Không có gợi ý nào được trả về.",
      })
    }

    console.log("Parsed backend data:", data)

    return NextResponse.json({
      recommendation:
        data.recommendation || data.message || data.response || data.text || "Không có gợi ý nào được trả về.",
    })
  } catch (error) {
    console.error("API Error:", error)

    // More detailed error logging
    if (error instanceof Error) {
      console.error("Error name:", error.name)
      console.error("Error message:", error.message)
      console.error("Error stack:", error.stack)
    }

    return NextResponse.json(
      {
        error: "Failed to get book recommendation",
        recommendation:
          "Xin lỗi, hiện tại không thể kết nối đến server gợi ý sách. Vui lòng kiểm tra kết nối mạng và thử lại sau.",
      },
      { status: 500 },
    )
  }
}
