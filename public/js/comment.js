const comment_text = document.querySelector("#comment");

postCommentFormHandler = async (event) => {
    event.preventDefault();
    const textdata = comment_text.Value
    if (textdata.length > 0) {
        const post_id = document.location.pathname.split("/")[2];
        const response = await fetch("/api/comments/", {
            method: "POST",
            body: JSON.stringify({ textdata, post_id }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.reload();

        } else {
            alert(" Post unable to save");
        }
    }
}

document.querySelector("#postComment").addEventListener("click", postCommentFormHandler);