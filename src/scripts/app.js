const movies = [/* Your full movie array from previous step */
    {
        title: "Avengers: Endgame", 
        thumbnail: "assets/images/EndGame.JPG",
        // Use Azure Media Services URL for actual streaming
        streamUrl: "https://your-azure-media-service.streaming.media.azure.net/..."
      },
      // Add more movies...
      // scripts/app.js (updated movie data)
      {
        title: "Echoes of the Void",
        genre: "Sci-Fi/Thriller",
        year: 2024,
        rating: "4.8/5",
        description: "In 2147, a lone astronaut discovers a dying alien civilization's final message hidden in deep space—a warning that threatens humanity's survival. With time running out, she must decode fractal patterns in quantum noise to prevent Earth's collapse.",
        director: "Ava Kurosawa",
        cast: "Zendaya, John Boyega, Rebecca Ferguson",
        thumbnail: "assets/images/echoes.jpg",
        streamUrl: "https://streamflixvideos.blob.core.windows.net/videos/Pokémon_Showdown!_ba_1356045274975305728.mp4"
      },
      {
        title: "Paradis City",
        genre: "Action/Mystery/Drama",
        year: 2025,
        rating: "4.9/10",
        description: "Minister Henriksson vanishes in Järva, Sweden's biggest hazardous no-go area surrounded by walls. Imprisoned fighter Emir offered freedom to find her.",
        director: "Guillermo Del Toro",
        cast: "Julia Ragnarsson, Alexander Abdallah, Ricky Carlson",
        thumbnail: "assets/images/ParadisCity.jpg",
        streamUrl: "https://your-azure-stream/crimson"
      },
      {
        title: "Flow",
        genre: "Animal Adventure/survival/Adventure",
        year: 2024,
        rating: "7.9/10",
        description: "Cat is a solitary animal, but as its home is devastated by a great flood, he finds refuge on a boat populated by various species, and will have to team up with them despite their differences.",
        director: "Gints Zilbalodis",
        cast: "Hiroyuki Sanada, Karen Fukuhara, Keanu Reeves",
        thumbnail: "assets/images/Flow.JPG",
        streamUrl: "https://your-azure-stream/neon"
      },
      {
        title: "The Cloverfield Paradox",
        genre: "Horror/Sci-Fi/Thriller",
        year: 2018,
        rating: "5.5/10",
        description: "A deaf composer in 18th-century Vienna discovers she can manipulate reality through vibrations. When Napoleon’s army approaches, she must conduct an orchestra of war machines and earthquakes to defend her city.",
        director: "Julius Onah",
        cast: "John Ortiz, David Oyelowo, Aksel Hennie",
        thumbnail: "assets/images/Clover.JPG",
        streamUrl: "https://your-azure-stream/symphony"
      },
      {
        title: "Spider-Man: Homecoming",
        genre: "Action/Adventure/Sci-Fi",
        year: 2017,
        rating: "7.4/10",
        description: "Peter Parker tries to stop Adrian 'The Vulture' Toomes from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student.",
        director: "John Watts",
        cast: "Tom Holland, Michael Keaton, Robert Downey Jr.",
        thumbnail: "assets/images/Spiderman.jpg",
        streamUrl: "https://your-azure-stream/lazarus"
      },
      {
        title: "Venom: The Last Dance",
        genre: "Action/Adventure/Sci-Fi",
        year: 2024,
        rating: "6.0/10",
        description: "Eddie Brock and Venom must make a devastating decision as they're pursued by a mysterious military man and alien monsters from Venom's home world.",
        director: "Kelly Marcel",
        cast: "Tom Hardy, Chiwetel Ejiofor, Juno Temple",
        thumbnail: "assets/images/Venom.jpg",
        streamUrl: "https://your-azure-stream/pantheon"
      }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('movies-container');
  
  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <div class="card-inner">
        <img src="${movie.thumbnail}" 
             alt="${movie.title}" 
             class="movie-thumbnail"
             loading="lazy">
        <div class="movie-info">
          <div class="info-content">
            <h3>${movie.title}</h3>
            <div class="metadata">
              <span class="rating">⭐ ${movie.rating}</span>
              <span class="year">📅 ${movie.year}</span>
              <span class="genre">🎭 ${movie.genre}</span>
            </div>
            <p class="description">${movie.description}</p>
            <button class="play-button-sm"><i class="fas fa-play"></i> Play</button>
          </div>
        </div>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (!e.target.closest('.play-button-sm')) {
        window.location.href = `player.html?video=${encodeURIComponent(movie.streamUrl)}`;
      }
    });
    
    container.appendChild(card);
  });
});


// Authentication//







  