9.times do |i|
    Book.create(
      title: "Book #{i + 1}",
      author: 'Jane Doe',
      status: 'Want to Read'
    )
end