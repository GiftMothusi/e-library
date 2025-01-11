interface Book {
    id: string;
    title: string;
    author: string;
    genre: string;
    rating: number;
    totalCopies: number;
    availableCopies: number;
    description: string;
    color: string;
    cover: string;
    videoUrl: string;
    isLoanedBook: boolean;
    summary: string;
    createdAt: Date | null;
  }