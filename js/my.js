const tweet = {
    user: "Brie",
    post: "Giving stand up comedy a go",
    replies: [
        { user: "al", message: "Agree on this" },
        { user: "Brie", message: "Are you a comedian?" },
    ],
    retweets: 15,
    hearts: 123,
    retweet: function () {
        // repost / retweet
        console.log("retweeting");
    },
    showReplies: function () {
        for (reply of this.replies) {
            console.log(`${reply.user} = ${reply.message}`);
        }
    }
}

tweet.showReplies();