const Social = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/social_background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col items-center justify-center py-10"
    >
      <h2 className="text-center font-semibold text-2xl mb-6">Social</h2>

      <div className="flex flex-col md:flex-row gap-8 p-4 items-center justify-center">
        {/* Twitter Embed */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4 text-center">Twitter (X)</h3>
          <div className="bg-white p-4 rounded-lg shadow-md w-96">
            <iframe
              src="https://platform.twitter.com/embed/Tweet.html?dnt=true&id=YOUR_TWEET_ID"
              title="Twitter Embed"
              className="w-full h-96 border-none rounded-lg"
              allowFullScreen
            />
          </div>
        </div>

        {/* Facebook Embed */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4 text-center">Facebook</h3>
          <div className="bg-white p-4 rounded-lg shadow-md w-96">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=YOUR_FACEBOOK_POST_URL&show_text=true&width=500"
              title="Facebook Embed"
              className="w-full h-96 border-none rounded-lg"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <hr className="border border-gray-700 my-8 w-3/4" />
    </div>
  );
};

export default Social;
