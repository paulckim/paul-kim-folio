/**
 * @author Paul Cheor Kim
 * @fileoverview Export MetaData and ObjectMappers to help represent and generate Section Components.
 */
import Section from "./HoC/Section";
import AboutSection from "./about";

/******************** [NAV LINK CONSTANTS] ********************/
const NAV_CONSTANTS = Object.freeze({
  HOME: "Paul 철 Kim",
  ABOUT: "About Me",
  EXPERIENCE: "Experience",
  SKILLS: "Skills",
  SERVICES: "Services",
  BLOG: "Blog",
  CONTACT: "Contact",
});
/******************** [NAV LINK CONSTANTS] ********************/

/******************** [HARDCODED SECTION BACKGROUNDS] ********************/
// TODO: remove hardcoded urls and grab from CDN
const homeImageUrl = "https://i.imgur.com/jdBlxYT.jpg";
const aboutImageUrl = "https://archive-media-1.nyafuu.org/wg/image/1409/00/1409002784203.png";
const expImageUrl = "https://orig00.deviantart.net/08d8/f/2015/303/b/1/everest_polyscape_by_kermitnirmit-d9eyroo.jpg";
const skillsImageUrl = "https://i.imgur.com/ZmU1Hro.png";
const servicesImageUrl = "https://archive-media-1.nyafuu.org/wg/image/1424/36/1424366309375.png";
const blogImageUrl = "https://downloadwallpaper.org/wp-content/uploads/2017/08/First-polyscape-using-Photoshop-1920x1080-Need-iPhone-S-Plus-Background-for-IPho-wallpaper-wpc5804805.jpg";
const contactImageUrl = "https://i.imgur.com/mgJGs64.png";
/******************** [HARDCODED SECTION BACKGROUND IMAGES] ********************/
// TODO: add a third property for Component (e.g. HoC)
const SectionMetaData = Object.freeze([
  {
    section: NAV_CONSTANTS.HOME,
    imgUrl: { backgroundImage: `url(${homeImageUrl})` }
  },
  {
    section: NAV_CONSTANTS.ABOUT,
    imgUrl: { backgroundImage: `url(${aboutImageUrl})` },
    component: AboutSection
  },
  {
    section: NAV_CONSTANTS.EXPERIENCE,
    imgUrl: { backgroundImage: `url(${expImageUrl})` }
  },
  {
    section: NAV_CONSTANTS.SKILLS,
    imgUrl: { backgroundImage: `url(${skillsImageUrl})` }
  },
  {
    section: NAV_CONSTANTS.SERVICES,
    imgUrl: { backgroundImage: `url(${servicesImageUrl})` }
  },
  {
    section: NAV_CONSTANTS.BLOG,
    imgUrl: { backgroundImage: `url(${blogImageUrl})` }
  },
  {
    section: NAV_CONSTANTS.CONTACT,
    imgUrl: { backgroundImage: `url(${contactImageUrl})` }
  }
]);
/******************** [HARDCODED SECTION BACKGROUND IMAGES] ********************/
/**
 * 
 * @param {any[]} sectionDatas 
 */
function SectionNavMapper(sectionDatas) {
  let i = 0;
  const sections = [], navLinks = [];
  sectionDatas.forEach(({ section, imgUrl, component }) => {
    const index = i++;
    sections.push({
      index: index,
      imgUrl: imgUrl,
      component: component
    });
    navLinks.push({
      index: index,
      section: section
    });
  });
  return {
    sections: sections,
    navLinks: navLinks
  }
}

export default Section;
export { SectionMetaData, SectionNavMapper };

