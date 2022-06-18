import React from "react";
import '../Style/StoryCreate.css';
import 'bootstrap-icons'

const StoryCreate = (props) => {
    return (
        <div>
            <form class="example" action="/action_page.php">
                <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit"><i class="bi bi-search"></i></button>
            </form>
        </div>
    )
}
export default StoryCreate