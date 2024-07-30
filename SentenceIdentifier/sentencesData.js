const sentencesData = [
    {
      "sentence": "The curious cat quickly chased the small mouse across the room.",
      "words": [
        { "word": "The", "type": "determiner" },
        { "word": "curious", "type": "adjective", "role": "adjective" },
        { "word": "cat", "type": "noun", "role": "subject" },
        { "word": "quickly", "type": "adverb", "role": "adverb" },
        { "word": "chased", "type": "verb", "role": "verb" },
        { "word": "the", "type": "determiner" },
        { "word": "small", "type": "adjective", "role": "adjective" },
        { "word": "mouse", "type": "noun", "role": "object" },
        { "word": "across", "type": "preposition" },
        { "word": "the", "type": "determiner" },
        { "word": "room", "type": "noun", "role": "object" }
      ]
    },
    {
      "sentence": "She gently placed the delicate vase on the wooden table.",
      "words": [
        { "word": "She", "type": "pronoun", "role": "subject" },
        { "word": "gently", "type": "adverb", "role": "adverb" },
        { "word": "placed", "type": "verb", "role": "verb" },
        { "word": "the", "type": "determiner" },
        { "word": "delicate", "type": "adjective", "role": "adjective" },
        { "word": "vase", "type": "noun", "role": "object" },
        { "word": "on", "type": "preposition" },
        { "word": "the", "type": "determiner" },
        { "word": "wooden", "type": "adjective", "role": "adjective" },
        { "word": "table", "type": "noun", "role": "object" }
      ]
    },
    {
      "sentence": "The energetic children happily played with the colorful balloons outside.",
      "words": [
        { "word": "The", "type": "determiner" },
        { "word": "energetic", "type": "adjective", "role": "adjective" },
        { "word": "children", "type": "noun", "role": "subject" },
        { "word": "happily", "type": "adverb", "role": "adverb" },
        { "word": "played", "type": "verb", "role": "verb" },
        { "word": "with", "type": "preposition" },
        { "word": "the", "type": "determiner" },
        { "word": "colorful", "type": "adjective", "role": "adjective" },
        { "word": "balloons", "type": "noun", "role": "object" },
        { "word": "outside", "type": "adverb", "role": "adverb" }
      ]
    },
    {
      "sentence": "He carefully painted the old fence white.",
      "words": [
        { "word": "He", "type": "pronoun", "role": "subject" },
        { "word": "carefully", "type": "adverb", "role": "adverb" },
        { "word": "painted", "type": "verb", "role": "verb" },
        { "word": "the", "type": "determiner" },
        { "word": "old", "type": "adjective", "role": "adjective" },
        { "word": "fence", "type": "noun", "role": "object" },
        { "word": "white", "type": "adjective", "role": "adjective" }
      ]
    },
    {
      "sentence": "The brilliant student eagerly completed the challenging assignment.",
      "words": [
        { "word": "The", "type": "determiner" },
        { "word": "brilliant", "type": "adjective", "role": "adjective" },
        { "word": "student", "type": "noun", "role": "subject" },
        { "word": "eagerly", "type": "adverb", "role": "adverb" },
        { "word": "completed", "type": "verb", "role": "verb" },
        { "word": "the", "type": "determiner" },
        { "word": "challenging", "type": "adjective", "role": "adjective" },
        { "word": "assignment", "type": "noun", "role": "object" }
      ]
    },
    {
      "sentence": "The strong wind suddenly blew the heavy door open.",
      "words": [
        { "word": "The", "type": "determiner" },
        { "word": "strong", "type": "adjective", "role": "adjective" },
        { "word": "wind", "type": "noun", "role": "subject" },
        { "word": "suddenly", "type": "adverb", "role": "adverb" },
        { "word": "blew", "type": "verb", "role": "verb" },
        { "word": "the", "type": "determiner" },
        { "word": "heavy", "type": "adjective", "role": "adjective" },
        { "word": "door", "type": "noun", "role": "object" },
        { "word": "open", "type": "adjective", "role": "adjective" }
      ]
    },
    {
      "sentence": "They quietly watched the beautiful sunset from the hilltop.",
      "words": [
        { "word": "They", "type": "pronoun", "role": "subject" },
        { "word": "quietly", "type": "adverb", "role": "adverb" },
        { "word": "watched", "type": "verb", "role": "verb" },
        { "word": "the", "type": "determiner" },
        { "word": "beautiful", "type": "adjective", "role": "adjective" },
        { "word": "sunset", "type": "noun", "role": "object" },
        { "word": "from", "type": "preposition" },
        { "word": "the", "type": "determiner" },
        { "word": "hilltop", "type": "noun", "role": "object" }
      ]
    },
    {
      "sentence": "The happy dog playfully barked at the flying kite.",
      "words": [
        { "word": "The", "type": "determiner" },
        { "word": "happy", "type": "adjective", "role": "adjective" },
        { "word": "dog", "type": "noun", "role": "subject" },
        { "word": "playfully", "type": "adverb", "role": "adverb" },
        { "word": "barked", "type": "verb", "role": "verb" },
        { "word": "at", "type": "preposition" },
        { "word": "the", "type": "determiner" },
        { "word": "flying", "type": "adjective", "role": "adjective" },
        { "word": "kite", "type": "noun", "role": "object" }
      ]
    },
    {
      "sentence": "The brave firefighter quickly rescued the frightened cat from the tree.",
      "words": [
        { "word": "The", "type": "determiner" },
        { "word": "brave", "type": "adjective", "role": "adjective" },
        { "word": "firefighter", "type": "noun", "role": "subject" },
        { "word": "quickly", "type": "adverb", "role": "adverb" },
        { "word": "rescued", "type": "verb", "role": "verb" },
        { "word": "the", "type": "determiner" },
        { "word": "frightened", "type": "adjective", "role": "adjective" },
        { "word": "cat", "type": "noun", "role": "object" },
        { "word": "from", "type": "preposition" },
        { "word": "the", "type": "determiner" },
        { "word": "tree", "type": "noun", "role": "object" }
      ]
    },
    {
      "sentence": "She lovingly baked a delicious cake for her friend's birthday.",
      "words": [
        { "word": "She", "type": "pronoun", "role": "subject" },
        { "word": "lovingly", "type": "adverb", "role": "adverb" },
        { "word": "baked", "type": "verb", "role": "verb" },
        { "word": "a", "type": "determiner" },
        { "word": "delicious", "type": "adjective", "role": "adjective" },
        { "word": "cake", "type": "noun", "role": "object" },
        { "word": "for", "type": "preposition" },
        { "word": "her", "type": "determiner" },
        { "word": "friend's", "type": "noun", "role": "object" },
        { "word": "birthday", "type": "noun", "role": "object" }
      ]
    },
    {
      "sentence": "The talented musician skillfully played the melodious tune on the piano.",
      "words": [
        { "word": "The", "type": "determiner" },
        { "word": "talented", "type": "adjective", "role": "adjective" },
        { "word": "musician", "type": "noun", "role": "subject" },
        { "word": "skillfully", "type": "adverb", "role": "adverb" },
        { "word": "played", "type": "verb", "role": "verb" },
        { "word": "the", "type": "determiner" },
        { "word": "melodious", "type": "adjective", "role": "adjective" },
        { "word": "tune", "type": "noun", "role": "object" },
        { "word": "on", "type": "preposition" },
        { "word": "the", "type": "determiner" },
        { "word": "piano", "type": "noun", "role": "object" }
      ]
    },
    {
      "sentence": "The cautious driver slowly drove the new car through the narrow streets.",
      "words": [
        { "word": "The", "type": "determiner" },
        { "word": "cautious", "type": "adjective", "role": "adjective" },
        { "word": "driver", "type": "noun", "role": "subject" },
        { "word": "slowly", "type": "adverb", "role": "adverb" },
        { "word": "drove", "type": "verb", "role": "verb" },
        { "word": "the", "type": "determiner" },
        { "word": "new", "type": "adjective", "role": "adjective" },
        { "word": "car", "type": "noun", "role": "object" },
        { "word": "through", "type": "preposition" },
        { "word": "the", "type": "determiner" },
        { "word": "narrow", "type": "adjective", "role": "adjective" },
        { "word": "streets", "type": "noun", "role": "object" }
      ]
    },
    {
      "sentence": "The young artist creatively drew a vivid portrait of the mountains.",
      "words": [
        { "word": "The", "type": "determiner" },
        { "word": "young", "type": "adjective", "role": "adjective" },
        { "word": "artist", "type": "noun", "role": "subject" },
        { "word": "creatively", "type": "adverb", "role": "adverb" },
        { "word": "drew", "type": "verb", "role": "verb" },
        { "word": "a", "type": "determiner" },
        { "word": "vivid", "type": "adjective", "role": "adjective" },
        { "word": "portrait", "type": "noun", "role": "object" },
        { "word": "of", "type": "preposition" },
        { "word": "the", "type": "determiner" },
        { "word": "mountains", "type": "noun", "role": "object" }
      ]
    },
    {
      "sentence": "He excitedly opened the wrapped gift on Christmas morning.",
      "words": [
        { "word": "He", "type": "pronoun", "role": "subject" },
        { "word": "excitedly", "type": "adverb", "role": "adverb" },
        { "word": "opened", "type": "verb", "role": "verb" },
        { "word": "the", "type": "determiner" },
        { "word": "wrapped", "type": "adjective", "role": "adjective" },
        { "word": "gift", "type": "noun", "role": "object" },
        { "word": "on", "type": "preposition" },
        { "word": "Christmas", "type": "noun", "role": "object" },
        { "word": "morning", "type": "noun", "role": "object" }
      ]
    },
    {
      "sentence": "The wise teacher patiently explained the complex concept to the curious students.",
      "words": [
        { "word": "The", "type": "determiner" },
        { "word": "wise", "type": "adjective", "role": "adjective" },
        { "word": "teacher", "type": "noun", "role": "subject" },
        { "word": "patiently", "type": "adverb", "role": "adverb" },
        { "word": "explained", "type": "verb", "role": "verb" },
        { "word": "the", "type": "determiner" },
        { "word": "complex", "type": "adjective", "role": "adjective" },
        { "word": "concept", "type": "noun", "role": "object" },
        { "word": "to", "type": "preposition" },
        { "word": "the", "type": "determiner" },
        { "word": "curious", "type": "adjective", "role": "adjective" },
        { "word": "students", "type": "noun", "role": "object" }
      ]
    },
    {
      "sentence": "The joyful children enthusiastically jumped into the clear pool.",
      "words": [
        { "word": "The", "type": "determiner" },
        { "word": "joyful", "type": "adjective", "role": "adjective" },
        { "word": "children", "type": "noun", "role": "subject" },
        { "word": "enthusiastically", "type": "adverb", "role": "adverb" },
        { "word": "jumped", "type": "verb", "role": "verb" },
        { "word": "into", "type": "preposition" },
        { "word": "the", "type": "determiner" },
        { "word": "clear", "type": "adjective", "role": "adjective" },
        { "word": "pool", "type": "noun", "role": "object" }
      ]
    },
    {
      "sentence": "She softly sang a soothing lullaby to the sleepy baby.",
      "words": [
        { "word": "She", "type": "pronoun", "role": "subject" },
        { "word": "softly", "type": "adverb", "role": "adverb" },
        { "word": "sang", "type": "verb", "role": "verb" },
        { "word": "a", "type": "determiner" },
        { "word": "soothing", "type": "adjective", "role": "adjective" },
        { "word": "lullaby", "type": "noun", "role": "object" },
        { "word": "to", "type": "preposition" },
        { "word": "the", "type": "determiner" },
        { "word": "sleepy", "type": "adjective", "role": "adjective" },
        { "word": "baby", "type": "noun", "role": "object" }
      ]
    },
    {
      "sentence": "The hungry cat quickly ate the fresh fish from the bowl.",
      "words": [
        { "word": "The", "type": "determiner" },
        { "word": "hungry", "type": "adjective", "role": "adjective" },
        { "word": "cat", "type": "noun", "role": "subject" },
        { "word": "quickly", "type": "adverb", "role": "adverb" },
        { "word": "ate", "type": "verb", "role": "verb" },
        { "word": "the", "type": "determiner" },
        { "word": "fresh", "type": "adjective", "role": "adjective" },
        { "word": "fish", "type": "noun", "role": "object" },
        { "word": "from", "type": "preposition" },
        { "word": "the", "type": "determiner" },
        { "word": "bowl", "type": "noun", "role": "object" }
      ]
    },
    {
      "sentence": "The determined athlete vigorously trained for the upcoming marathon.",
      "words": [
        { "word": "The", "type": "determiner" },
        { "word": "determined", "type": "adjective", "role": "adjective" },
        { "word": "athlete", "type": "noun", "role": "subject" },
        { "word": "vigorously", "type": "adverb", "role": "adverb" },
        { "word": "trained", "type": "verb", "role": "verb" },
        { "word": "for", "type": "preposition" },
        { "word": "the", "type": "determiner" },
        { "word": "upcoming", "type": "adjective", "role": "adjective" },
        { "word": "marathon", "type": "noun", "role": "object" }
      ]
    },
    {
      "sentence": "The graceful dancer elegantly performed a beautiful ballet on the stage.",
      "words": [
        { "word": "The", "type": "determiner" },
        { "word": "graceful", "type": "adjective", "role": "adjective" },
        { "word": "dancer", "type": "noun", "role": "subject" },
        { "word": "elegantly", "type": "adverb", "role": "adverb" },
        { "word": "performed", "type": "verb", "role": "verb" },
        { "word": "a", "type": "determiner" },
        { "word": "beautiful", "type": "adjective", "role": "adjective" },
        { "word": "ballet", "type": "noun", "role": "object" },
        { "word": "on", "type": "preposition" },
        { "word": "the", "type": "determiner" },
        { "word": "stage", "type": "noun", "role": "object" }
      ]
    }
  ];
  
  export default sentencesData;
  