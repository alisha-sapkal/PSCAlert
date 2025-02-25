'use client'

import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Upload } from "lucide-react";

// ... existing code ...
const QuestionScanner = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };
// ... existing code ...

  const handleSubmit = () => {
    if (selectedFile) {
      setResult("Processing image...");
      // Implement OCR logic here
    } else if (question) {
      setResult("Fetching answer...");
      // Implement AI search logic here
    } else {
      setResult("Please upload an image or enter a question.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-lg bg-white p-6 shadow-lg rounded-lg">
        <CardContent className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-center">AI-Powered Question Scanner</h2>
          <label className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <Upload className="w-8 h-8 text-gray-500" />
            <span className="text-gray-500">Upload Question Image</span>
            <input type="file" className="hidden" onChange={handleFileUpload} />
          </label>
          <Input
            type="text"
            placeholder="Or enter your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Button className="w-full bg-blue-600 text-white" onClick={handleSubmit}>
            Get Answer
          </Button>
          {result && <p className="text-center text-gray-700 mt-4">{result}</p>}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuestionScanner;
