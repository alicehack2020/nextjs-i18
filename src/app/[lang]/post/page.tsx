import { getDictionary } from "../../../../dictionary";
import Link from "next/link";

const Post = async ({ params }: { params: any }) => {
  const lang: any = await getDictionary(params.lang);
  let data = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      userId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
  ];

   return (
    <>
      <div>{lang.form.title}</div>
      <div>{lang.form.data}</div>

      <div>
        <p>more post</p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((item) => (
            <Link className="bg-white rounded-lg shadow-md p-6" href={`/post/${item.id}`}>
              <h2 className="text-xl font-bold mb-4">
               {item.title}
              </h2>
              <p className="text-gray-600 mb-2">{item.id}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                 View
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Post;
