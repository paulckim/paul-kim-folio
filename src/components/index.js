/**
 * @author Paul Cheor Kim
 * @fileoverview Export MetaData and ObjectMappers to help represent and generate Section Components.
 */
/******************** [HARDCODED SECTION BACKGROUNDS] ********************/
// TODO: remove hardcoded urls and grab from CDN
const homeImageUrl = "https://i.imgur.com/jdBlxYT.jpg";
const aboutImageUrl = "https://archive-media-1.nyafuu.org/wg/image/1409/00/1409002784203.png";
const expImageUrl = "https://orig00.deviantart.net/08d8/f/2015/303/b/1/everest_polyscape_by_kermitnirmit-d9eyroo.jpg";
const skillsImageUrl = "https://i.imgur.com/ZmU1Hro.png";
// const servicesImageUrl = "https://archive-media-1.nyafuu.org/wg/image/1424/36/1424366309375.png";
const blogImageUrl = "https://downloadwallpaper.org/wp-content/uploads/2017/08/First-polyscape-using-Photoshop-1920x1080-Need-iPhone-S-Plus-Background-for-IPho-wallpaper-wpc5804805.jpg";
const contactImageUrl = "https://i.imgur.com/mgJGs64.png";
/******************** [HARDCODED SECTION BACKGROUND IMAGES] ********************/
/******************** [NAV META DATA] ********************/
// TODO: add a third property for Component (e.g. HoC)
const SlideMetaData = Object.freeze({
  HOME: {
    navText: 'Paul 철 Kim',
    imgUrl: `url(${homeImageUrl})`
  },
  ABOUT: {
    navText: 'About Me',
    imgUrl: `url(${aboutImageUrl})`
  },
  EXPERIENCE: {
    navText: 'Experience',
    imgUrl: `url(${expImageUrl})`
  },
  SKILLS: {
    navText: 'Skills',
    imgUrl: `url(${skillsImageUrl})`
  },
  BLOG: {
    navText: 'Blog',
    imgUrl: `url(${blogImageUrl})`
  },
  CONTACT: {
    navText: 'Contact',
    imgUrl: `url(${contactImageUrl})`
  },
});
/******************** [NAV META DATA] ********************/

export default SlideMetaData;
