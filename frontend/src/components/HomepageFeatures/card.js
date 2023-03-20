export default function Card ({ headline, text, contentUrl }) {
    return  (
        <div className = {archiveStyles.archive}>
            <div className = {archiveStyles.card}>
            <div className={archiveStyles.heading}>
                <a href = {contentUrl}>{headline}</a>
            </div>
            <div className={archiveStyles.text}>
                <p> {text} </p>
            </div>
            </div>
        </div>
    );
}