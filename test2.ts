// Define the Book interface
interface Book {
  title: string; // The title of the book
  author: string; // The author of the book
  publicationYear: number; // The year the book was published
}

// Function to display books by year of publication
function displayBooksByYear(bookArray: Book[], year: number): void {
  // Filter the books to find those published in the specified year
  const booksInYear = bookArray.filter((book) => book.publicationYear === year);

  // Check if any books were found
  if (booksInYear.length > 0) {
    console.log(`Books published in the year ${year}:`);
    // Display each book's title and author
    booksInYear.forEach((book) => {
      console.log(`- ${book.title} by ${book.author}`);
    });
  } else {
    console.log(`No books were published in the year ${year}`);
  }
}

function displayBooksByYearDummy(bookArray: Book[], year: number): void {
  // Create an empty array to hold books from the specified year
  let booksInYear: Book[] = [];

  // Loop through each book in the bookArray
  for (let i = 0; i < bookArray.length; i++) {
    // Check if the publication year of the current book matches the specified year
    if (bookArray[i].publicationYear === year) {
      // If it matches, push the book into the booksInYear array
      booksInYear.push(bookArray[i]);
    }
  }

  // Check if any books were found for the specified year
  if (booksInYear.length > 0) {
    console.log("Books published in the year " + year + ":");
    // Loop through the found books and display them
    for (let j = 0; j < booksInYear.length; j++) {
      console.log("- " + booksInYear[j].title + " by " + booksInYear[j].author);
    }
  } else {
    // If no books were found, display a message
    console.log("No books were published in the year " + year);
  }
}

// Array of books
const bookArray: Book[] = [
  { title: "Book A", author: "Author A", publicationYear: 2020 },
  { title: "Book B", author: "Author B", publicationYear: 2019 },
  { title: "Book C", author: "Author C", publicationYear: 2020 },
  { title: "Book D", author: "Author D", publicationYear: 2018 },
];

// Call the function to display books published in a certain year
displayBooksByYear(bookArray, 2020);
// Output:
// Books published in the year 2020:
// - Book A by Author A
// - Book C by Author C

displayBooksByYear(bookArray, 2019);
// Output:
// Books published in the year 2019:
// - Book B by Author B

displayBooksByYear(bookArray, 2021);
// Output:
// No books were published in the year 2021
