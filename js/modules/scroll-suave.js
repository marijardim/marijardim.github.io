export default class ScrollSuave{
  constructor(links, options){
    this.linksInternos = document.querySelectorAll(links);
    this.scrollToSection = this.scrollToSection.bind(this);
  }

scrollToSection(e){
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView({behavior: "smooth", block: "start"})

}
addLinkEvent(){
  this.linksInternos.forEach((link) =>{
    link.addEventListener('click', this.scrollToSection)
  })
}
init(){
  this.addLinkEvent();
  return this;
}
}