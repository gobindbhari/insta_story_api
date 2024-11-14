This project is an **API** for handling basic social media interactions, specifically focusing on **post likes, dislikes, and comments.** Built with **MongoDB and Express**, it ensures efficient **user interactions, preventing duplicates and optimizing data storage**.


**Key Features and Implementation of Post Interaction API: Like, Dislike, and Comment**
**1. Post Model and Schema Design**
Title and Content: Fields to store the main content of each post.
Likes/Dislikes: Fields for like and dislike counts with arrays to track user IDs who have liked or disliked, ensuring users can only react once.
Comments: An array of objects for comments, where each comment includes the ID of the commenting user, the comment text, and a timestamp.
**2. Like/Dislike Logic**
Like Endpoint: Checks if a user has already liked the post. If not, it adds the user’s ID to the likedBy array and increments the like count. If the user had previously disliked the post, it removes their ID from dislikedBy and decreases the dislike count.
Dislike Endpoint: Similar logic to the like feature. If the user hasn’t already disliked, it adds their ID to the dislikedBy array and increments the dislike count. If they had liked it before, it reverses the like count and updates the arrays.
**3. Comment Feature**
Add Comment Endpoint: Validates that the post and user exist, then adds a comment object to the comments array in the post document. Each comment entry includes:
User ID: Reference to the commenting user for tracking.
Comment Text: The text of the comment.
Timestamp: Auto-generated timestamp for when the comment was created.
**4. Endpoint Validation**
User Existence Check: Each like, dislike, or comment action checks that the user exists in the database.
Post Existence Check: Ensures the post exists before performing any action to avoid errors.
**5. Optimized API Response**
Returns messages to indicate successful actions (e.g., “Post liked successfully”) and detailed error messages for failures (e.g., “User not found”).
**6. Testing and Refinement**
Used tools like Postman to rigorously test endpoints, confirm functionality, and verify that each user action was tracked and stored accurately.

