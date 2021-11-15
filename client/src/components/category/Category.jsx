import "./category.css"

export default function Category(category) {
    return (
        <div>
            <div className="categoryTitleWrapper">
                <div className="categoryTitle ">CATEGORY</div>
                <i className="categoryArrow fas fa-chevron-right"></i>
                <div className=" categoryTitle">
                    {category.category}
                </div>
            </div>
        </div>
    )
}
