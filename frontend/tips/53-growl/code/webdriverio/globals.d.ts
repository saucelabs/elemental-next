// jQuery and jquery-growl are added to the page by the test, so TypeScript doesn't know about them
interface Window {
    jQuery: any;
}
