import { remark } from 'remark';
import html from 'remark-html';
import { fetchEntries } from '../pages/api/cms';

export async function getSortedPostsData() {
  const entries = await fetchEntries();

  const allPostsData = entries.map((entry) => {
    const id = entry.uid;
    const date = entry.date;
    const title = entry.title;
    const multi_line = entry.multi_line;

    return {
      id,
      date,
      title,
      multi_line,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getAllPostIds() {
  console.log('fetchingEntries')

  const entries = await fetchEntries();
  console.log('here is entries', entries)
  
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: <uid>
    //     }
    //   },
    //   {
    //     params: {
    //       id: <uid>
    //     }
    //   }
    // ]
    return entries.map((entry) => {
      return {
        params: {
          id: entry.uid,
        },
      };
    });
  }

  export async function getPostData(id) {
    const entries = await fetchEntries();
    const entry = entries.find(obj => obj.uid == id)
    const content = entry.multi_line
  
    const processedContent = await remark()
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();
    const title = entry.title;
    const date = entry.date;
  
    return {
      id,
      contentHtml,
      title,
      date,
    };
  }