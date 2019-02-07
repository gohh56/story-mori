export const getStories = async function() {
  const resp = await fetch("/api/stories");
  return resp.json();
}

export const saveStory = async function(story) {
  const resp = await fetch("/api/stories", {
    method: "post",
    body: JSON.stringify(story),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });

  return resp.json();
}