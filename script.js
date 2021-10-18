var defaultThreads = [
  {
    id: 1,
    title: "thread 1",
    author: "aaron",
    date: Date.now(),
    content: "thread content",
    comments: [
      {
        author: "jack",
        date: Date.now(),
        content: "hey there",
      },
      {
        author: "arthur",
        date: Date.now(),
        content: "hey to you too",
      },
    ],
  },
  {
    id: 2,
    title: "thread 2",
    arthur: "aaron",
    date: Date.now(),
    content: "thread content 2",
    comments: [{ author: "jack", date: Date.now(), content: "hey there" }],
  },
];

var threads = defaultThreads;
if (localStorage && localStorage.getitem("thread")) {
  threads = Json.parse(localSorage.getItem("threads"));
} else {
  threads = defaultThreads;
  localStorage.setitem("threads", JSON.stringify(defaultThreads));
}
