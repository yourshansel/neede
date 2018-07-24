import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import CardComponent from './CardComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import needelibrary from './needelibrary.json';


class App extends Component {
  constructor() {
    super();
    this.state = {
      cards:
        [
         {
           "category": "Colors",
           "name": "Coolors",
           "url": "https://coolors.co/",
           "description": "Generate color palettes and schemes for your designs"
         },
         {
           "category": "Colors",
           "name": "UI Gradients",
           "url": "https://uigradients.com",
           "description": "Random Color Gradients"
         },
         {
           "category": "Colors",
           "name": "Color Hunt",
           "url": "https://colorhunt.co/",
           "description": "Hand-picked color inspiration for designers & artists"
         },
         {
           "category": "Colors",
           "name": "Adobe Color Wheel",
           "url": "https://color.adobe.com/",
           "description": "Adobe's color wheel combination"
         },
         {
           "category": "Colors",
           "name": "WebGradients",
           "url": "https://webgradients.com/",
           "description": "Collection of background gradients"
         },
         {
           "category": "Colors",
           "name": "ColorSpace",
           "url": "https://mycolor.space/",
           "description": "Generate color palettes from your favorite color"
         },
         {
           "category": "Colors",
           "name": "Khroma",
           "url": "http://khroma.co/train/",
           "description": "Ai-powered Color Palette Generator"
         },
         {
           "category": "Colors",
           "name": "Sip",
           "url": "http://sipapp.io/",
           "description": "Color Palette management"
         },
         {
           "category": "Colors",
           "name": "ColorMe",
           "url": "https://colorme.io/",
           "description": "Visualize how colors would show up in CSS"
         },
         {
           "category": "Colors",
           "name": "Use Contrast",
           "url": "https://usecontrast.com/",
           "description": "Quick access to WCAG Color Access Ratio"
         },
         {
           "category": "Colors",
           "name": "Color Hexa",
           "url": "https://www.colorhexa.com/",
           "description": "Encyclopedia for colors"
         },
         {
           "category": "Colors",
           "name": "ColorDot",
           "url": "https://color.hailpixel.com/",
           "description": "Color palette picker designed for humans."
         },
         {
           "category": "Colors",
           "name": "Color Method",
           "url": "http://color.method.ac/",
           "description": "Fun color matching game to train your eye."
         },
         {
           "category": "Colors",
           "name": "Brand Colors",
           "url": "https://brandcolors.net/",
           "description": "Find the colors used by famous brands around the world"
         },
         {
           "category": "Community",
           "name": "Dribbble",
           "url": "https://dribbble.com/",
           "description": "Online community for showcasing and discover design work"
         },
         {
           "category": "Community",
           "name": "Behance",
           "url": "https://www.behance.net/",
           "description": "Showcase and discover creative work"
         },
         {
           "category": "Community",
           "name": "Designer News",
           "url": "https://www.designernews.co/",
           "description": "Design community for links and events"
         },
         {
           "category": "Community",
           "name": "UX Stack Exchange",
           "url": "https://ux.stackexchange.com/",
           "description": "Q&A site for user experience design"
         },
         {
           "category": "Community",
           "name": "Designers Talk",
           "url": "http://www.designerstalk.com/forums/",
           "description": "Forum for designers from all disciplines"
         },
         {
           "category": "Community",
           "name": "Smashing Magazine",
           "url": "https://www.smashingmagazine.com/",
           "description": "Editorial content and resources for web developers and web designers"
         },
         {
           "category": "Community",
           "name": "Web designer News",
           "url": "https://www.webdesignernews.com/",
           "description": "Curated stories for designers"
         },
         {
           "category": "Community",
           "name": "Product Hunt",
           "url": "https://producthunt.com",
           "description": "Curation of new products released each day"
         },
         {
           "category": "Community",
           "name": "Spectrum",
           "url": "https://spectrum.chat/",
           "description": "Community platform with various design channels"
         },
         {
           "category": "Icons",
           "name": "Nounproject",
           "url": "https://thenounproject.com/",
           "description": "Icons for everything"
         },
         {
           "category": "Icons",
           "name": "Flaticon",
           "url": "https://www.flaticon.com/",
           "description": "Vector based icons in multiple formats"
         },
         {
           "category": "Icons",
           "name": "Iconfinder",
           "url": "https://www.iconfinder.com/",
           "description": "Collection of various icon packs"
         },
         {
           "category": "Icons",
           "name": "Graphic Burger",
           "url": "https://graphicburger.com/",
           "description": "Design resources for graphic and visual design"
         },
         {
           "category": "Icons",
           "name": "iconmonstr",
           "url": "https://iconmonstr.com/",
           "description": "Simple icons all made by the same creator"
         },
         {
           "category": "Icons",
           "name": "Apply Pixels",
           "url": "https://applypixels.com/",
           "description": "Icon & UI templates for mobile design"
         },
         {
           "category": "Icons",
           "name": "Font Awesome",
           "url": "https://fontawesome.com",
           "description": "Icon set and toolkit for Web design"
         },
         {
           "category": "Icons",
           "name": "Feather Icons",
           "url": "https://feathericons.com/",
           "description": "Collection of simple open sources icons built for consistency and readability"
         },
         {
           "category": "Icons",
           "name": "SVG Icons",
           "url": "http://svgicons.sparkk.fr/",
           "description": "SVG Icons designed for the web"
         },
         {
           "category": "Icons",
           "name": "Maki Icons",
           "url": "https://www.mapbox.com/maki-icons/",
           "description": "Icon set made for map designers"
         },
         {
           "category": "Icons",
           "name": "IconJar",
           "url": "https://geticonjar.com/",
           "description": "Organisational tool for your icon libraries"
         },
         {
           "category": "Inspiration",
           "name": "Nicely Done",
           "url": "http://nicelydone.club/products/",
           "description": "Product inspiration for design patterns"
         },
         {
           "category": "Inspiration",
           "name": "Prototypr",
           "url": "https://www.prototypr.io/home/",
           "description": "Daily design news, inspirations and deals"
         },
         {
           "category": "Inspiration",
           "name": "Mobbin Design",
           "url": "https://mobbin.design/",
           "description": "Hand-picked latest mobile design patterns"
         },
         {
           "category": "Inspiration",
           "name": "Collect UI",
           "url": "http://collectui.com/",
           "description": "Daily inspiration collected from dailyui archive"
         },
         {
           "category": "Inspiration",
           "name": "Httpster",
           "url": "https://httpster.net/",
           "description": "Inspiration resources for websites around the world"
         },
         {
           "category": "Inspiration",
           "name": "Sitesee",
           "url": "https://sitesee.co/",
           "description": "Curated gallery of beautiful modern websites"
         },
         {
           "category": "Inspiration",
           "name": "Awwwards",
           "url": "https://www.awwwards.com/",
           "description": "Best web design trends and competition"
         },
         {
           "category": "Inspiration",
           "name": "Lapa",
           "url": "https://www.lapa.ninja/",
           "description": "Landing page inspiration"
         },
         {
           "category": "Inspiration",
           "name": "Good Web Design",
           "url": "http://www.goodweb.design/",
           "description": "Curated landing page designs"
         },
         {
           "category": "Inspiration",
           "name": "Siiimple",
           "url": "https://siiimple.com/",
           "description": "Minimalist website inspiration"
         },
         {
           "category": "Photo",
           "name": "Flickr",
           "url": "https://www.flickr.com/",
           "description": "Image hosting site with online community"
         },
         {
           "category": "Photo",
           "name": "Unsplash",
           "url": "https://unsplash.com/",
           "description": "Free high resolution stock photos by photographers"
         },
         {
           "category": "Photo",
           "name": "Death To Stock",
           "url": "https://deathtothestockphoto.com/",
           "description": "Photo resources for creatives"
         },
         {
           "category": "Photo",
           "name": "Pexels",
           "url": "https://www.pexels.com/",
           "description": "Free stock photos with Creative Commons Zero (CC0) License"
         },
         {
           "category": "Photo",
           "name": "Barn Images",
           "url": "https://barnimages.com/",
           "description": "High-resolution photos for everyone"
         },
         {
           "category": "Photo",
           "name": "Pixabay",
           "url": "https://pixabay.com/",
           "description": "Royalty free stock photos and videos"
         },
         {
           "category": "Photo",
           "name": "Pinterest",
           "url": "https://www.pinterest.com",
           "description": "Discover and organize your photos with pinterest boards"
         },
         {
           "category": "Photo",
           "name": "500px",
           "url": "https://500px.com",
           "description": "Online community and marketplace for photography"
         },
         {
           "category": "Software",
           "name": "Sketch",
           "url": "https://sketchapp.com/",
           "description": "Digital design toolkit for interface design"
         },
         {
           "category": "Software",
           "name": "Framer",
           "url": "https://framer.com/",
           "description": "Interactive design and prototyping tool. "
         },
         {
           "category": "Software",
           "name": "Invision",
           "url": "https://www.invisionapp.com/",
           "description": "Digital product design, workflow & collaboration tool"
         },
         {
           "category": "Software",
           "name": "Zeplin",
           "url": "https://zeplin.io/",
           "description": "Collaboration tool for UI designers & front end developers"
         },
         {
           "category": "Software",
           "name": "Principle",
           "url": "http://principleformac.com/",
           "description": "Prototyping tool for animated design and interaction"
         },
         {
           "category": "Software",
           "name": "Marvel",
           "url": "https://marvelapp.com/",
           "description": "Collaborative design platform for digital design & prototyping"
         },
         {
           "category": "Software",
           "name": "Abstract",
           "url": "https://www.goabstract.com/",
           "description": "Secure version control and design workflow management for Sketch"
         },
         {
           "category": "Software",
           "name": "Figma",
           "url": "https://www.figma.com/",
           "description": "Browser-based interface design tool"
         },
         {
           "category": "Software",
           "name": "Atomic ",
           "url": "https://atomic.io/",
           "description": "Advanced interactive design software"
         },
         {
           "category": "Software",
           "name": "Affinity",
           "url": "https://affinity.serif.com/en-us/",
           "description": "Professional graphics and editing software"
         },
         {
           "category": "Software",
           "name": "Niice",
           "url": "https://niice.co",
           "description": "Canvas for creative discussion within teams"
         },
         {
           "category": "Software",
           "name": "Evrybo",
           "url": "https://evrybo.com/",
           "description": "Design collaboration tool and workflow management"
         },
         {
           "category": "Typography",
           "name": "Typespiration",
           "url": "http://typespiration.com/",
           "description": "Free inspiration for web fonts & color combination"
         },
         {
           "category": "Typography",
           "name": "Google Fonts",
           "url": "https://fonts.google.com/",
           "description": "Library of over 800 free open-sourced fonts"
         },
         {
           "category": "Typography",
           "name": "DaFont",
           "url": "https://www.dafont.com/",
           "description": "Free downloadable fonts of various styles"
         },
         {
           "category": "Typography",
           "name": "youworkforthem",
           "url": "https://www.youworkforthem.com/fonts/",
           "description": "Designer fonts marketplace"
         },
         {
           "category": "Typography",
           "name": "Typekit",
           "url": "https://typekit.com/",
           "description": "Subscription service for fonts synced directly to softwares or websites"
         },
         {
           "category": "Typography",
           "name": "Typographica",
           "url": "http://typographica.org/",
           "description": "Review of typefaces and typebooks"
         },
         {
           "category": "Typography",
           "name": "Fonts In Use",
           "url": "https://fontsinuse.com/",
           "description": "Searchable archive of fonts use in various designs"
         },
         {
           "category": "Typography",
           "name": "Glyphs",
           "url": "https://glyphsapp.com/",
           "description": "Software for designing, editing and creating fonts"
         },
         {
           "category": "UI",
           "name": "PSDDD",
           "url": "https://psddd.co/",
           "description": "Free UI templates for Sketch and Photoshop"
         },
         {
           "category": "UI",
           "name": "UI 8",
           "url": "https://ui8.net/",
           "description": "Free and Paid UI Template and Wireframing Kits"
         },
         {
           "category": "UI",
           "name": "Great Simple Studio",
           "url": "https://greatsimple.io/",
           "description": "Useful UI resources for wireframes, graphic interfaces, icons and core elements"
         },
         {
           "category": "UI",
           "name": "UI Stencils",
           "url": "https://www.uistencils.com/",
           "description": "Tools and materials for sketching prototypes and wireframes"
         },
         {
           "category": "UI",
           "name": "Semantic UI",
           "url": "https://semantic-ui.com/",
           "description": "UI component library for designers and web developers"
         },
         {
           "category": "UI",
           "name": "Simple Mockups",
           "url": "https://lstore.graphics",
           "description": "Free mockups, UI/UX tools and scene creators for designers"
         },
         {
           "category": "UI",
           "name": "Sketch App Resources",
           "url": "https://www.sketchappsources.com/",
           "description": "Largest collection of free and premium Sketch resources for mobile, web, UI & UX design"
         },
         {
           "category": "UI",
           "name": "UI Space",
           "url": "https://uispace.net/",
           "description": "Free UI resources for Photoshop, Illustrator, Sketch & Web Design"
         },
         {
           "category": "UI",
           "name": "Sketch For Designers",
           "url": "https://sketch.fordesignrs.com/",
           "description": "Collection of Sketch resources - templates, plugins, articles and tutorials"
         },
         {
           "category": "UX ",
           "name": "Little Big Details",
           "url": "http://littlebigdetails.com/",
           "description": "Curated collection of finder design details for user delight"
         },
         {
           "category": "UX ",
           "name": "Dark Patterns",
           "url": "https://darkpatterns.org/",
           "description": "Website that exposes decepting user interfaces and types of tricks used to deceive users"
         },
         {
           "category": "UX ",
           "name": "Laws of UX",
           "url": "https://lawsofux.com/",
           "description": "Collection of maxims and principles for designing user interfaces"
         },
         {
           "category": "UX ",
           "name": "Usability Hub",
           "url": "https://usabilityhub.com/",
           "description": "Online usability testing platform"
         },
         {
           "category": "UX ",
           "name": "Lookback",
           "url": "https://lookback.io/",
           "description": "Recording tool for user interviews and usability testing"
         },
         {
           "category": "UX ",
           "name": "UserTesting",
           "url": "https://www.usertesting.com/",
           "description": "UX research and insights platform to improving the user experience"
         },
         {
           "category": "UX ",
           "name": "Usability",
           "url": "https://www.usability.gov/",
           "description": "Lessons and resources for learning about UX best practices"
         },
         {
           "category": "UX ",
           "name": "Design Kit",
           "url": "http://www.designkit.org/",
           "description": "IDEO's platform to learn abouyt human-centered design"
         },
         {
           "category": "UX ",
           "name": "UserOnboard",
           "url": "https://www.useronboard.com/",
           "description": "Resources for designing the onboarding experience - includes teardowns from most popular web apps"
         },
         {
           "category": "UX ",
           "name": "UX Pin",
           "url": "https://www.uxpin.com/",
           "description": "UX design platform for collborating on design systems, prototyping and developer documentation"
         },
         {
           "category": "UX ",
           "name": "Microsoft Design",
           "url": "https://www.microsoft.com/design/inclusive/",
           "description": "Toolkit designed by Microsoft for inclusive design"
         }
        
      ]
    }
  }

    filterCategory(category) {
      this.setState({ cards: this.state.cards.filter(cards => cards.category !== category)});

    }
    render() {
      let cardComps = this.state.cards.map(cards => {
        return (
          <Col sm="4">
            <CardComponent key={cards.category} filterCategory={this.filterCategory.bind(this)} cards = {cards} />
          </Col>
        )
      })
      return (
        <Container fluid>
          <Row>
            {cardComps}
          </Row>
        </Container>
      )
    }
  }

export default App;
