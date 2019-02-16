export const getStories = async function() {
  const resp = await fetch("/api/stories");
  return resp.json();
}

export const saveStory = async function(story) {
  const resp = await fetch("/api/stories", {
    method: "post",
    body: JSON.stringify(story),
    headers: {
      "Content-Type": "application/json"
    }
  });

  return resp.json();
}

export const getPage = async function(storyId, pageId) {
  const resp = await fetch(`/api/stories/${storyId}/pages/${pageId}`);
  return resp.json();
}

export const savePage = async function(storyId, parentId, name, text) {
  const resp = await fetch(`/api/stories/${storyId}/pages/${parentId}/next`, {
    method: "post",
    body: JSON.stringify({ name, text }),
    headers: {
      "Content-Type": "application/json"
    },
  });
  return resp.json();
};