import { getDictionary } from "../../../../dictionary";

const Post = async ({ params }: { params: any }) => {
const lang: any = await getDictionary(params.lang);

  return (
    <>
      <div>{lang.form.title}</div>
    <div>{lang.form.data}</div>
    </>
    
  )
}

export default Post