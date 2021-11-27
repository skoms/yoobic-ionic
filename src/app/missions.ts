/* eslint-disable max-len */
export interface Mission {
  id: number | undefined;
  thumbnail: string;
  name: string;
  location: string;
  company: string;
  rating: RatingObject;
  date: string;
  distance: string;
  geoLocation: GeoLoc;
  picture: string;
  description: Description;
}

interface Description {
  title: string;
  intro: string;
  details: string;
  deadline: string;
}

export interface GeoLoc {
  latitude: number;
  longitude: number;
}

export interface RatingObject {
  decimal: number;
  filled?: string[];
  halfFilled?: string[];
  empty?: string[];
}

export const MISSIONS: Mission[] = [
  {
    id: undefined,
    thumbnail: '../../assets/images/me.jpg',
    name: 'Andreas Skomsøy',
    location: 'London, England',
    company: 'Yoobic',
    rating: { decimal: 3.5 },
    date: '2021-11-25',
    distance: '',
    geoLocation: { latitude: 51.501364, longitude: -0.1418899999999894 },
    picture: '../../assets/images/mission1.jpg',
    description: {
      title: 'Lorem Ipsum',
      intro:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio condimentum, facilisis ligula vitae, eleifend.',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus nisl, ullamcorper vel sem eget, ornare dictum velit. Cras quis laoreet purus, quis eleifend nibh. Maecenas eget pellentesque enim, ac ultrices magna. Quisque interdum mi et nibh vulputate varius. Etiam lacinia pharetra sollicitudin. Aenean in tincidunt tortor. Vestibulum eleifend quis tellus eget dapibus. Pellentesque molestie risus vel hendrerit pellentesque. In ut augue ac lacus rutrum convallis a quis ipsum. Suspendisse a bibendum dui. Etiam volutpat diam sapien, id sagittis metus dignissim luctus.',
      deadline: '2021-11-30',
    },
  },
  {
    id: undefined,
    thumbnail: '../../assets/images/me.jpg',
    name: 'Andreas Skomsøy',
    location: 'Wiltshire, England',
    company: 'Yoobic',
    rating: { decimal: 2 },
    date: '2021-11-27',
    distance: '',
    geoLocation: { latitude: 51.178889, longitude: -1.826111 },
    picture: '../../assets/images/mission2.jpg',
    description: {
      title: 'Lorem Ipsum',
      intro:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio condimentum, facilisis ligula vitae, eleifend.',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus nisl, ullamcorper vel sem eget, ornare dictum velit. Cras quis laoreet purus, quis eleifend nibh. Maecenas eget pellentesque enim, ac ultrices magna. Quisque interdum mi et nibh vulputate varius. Etiam lacinia pharetra sollicitudin. Aenean in tincidunt tortor. Vestibulum eleifend quis tellus eget dapibus. Pellentesque molestie risus vel hendrerit pellentesque. In ut augue ac lacus rutrum convallis a quis ipsum. Suspendisse a bibendum dui. Etiam volutpat diam sapien, id sagittis metus dignissim luctus.',
      deadline: '2021-11-30',
    },
  },
  {
    id: undefined,
    thumbnail: '../../assets/images/me.jpg',
    name: 'Andreas Skomsøy',
    location: 'Northumberland, England',
    company: 'Yoobic',
    rating: { decimal: 5 },
    date: '2021-11-30',
    distance: '',
    geoLocation: { latitude: 55.41575, longitude: -1.70607 },
    picture: '../../assets/images/mission3.jpg',
    description: {
      title: 'Lorem Ipsum',
      intro:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio condimentum, facilisis ligula vitae, eleifend.',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus nisl, ullamcorper vel sem eget, ornare dictum velit. Cras quis laoreet purus, quis eleifend nibh. Maecenas eget pellentesque enim, ac ultrices magna. Quisque interdum mi et nibh vulputate varius. Etiam lacinia pharetra sollicitudin. Aenean in tincidunt tortor. Vestibulum eleifend quis tellus eget dapibus. Pellentesque molestie risus vel hendrerit pellentesque. In ut augue ac lacus rutrum convallis a quis ipsum. Suspendisse a bibendum dui. Etiam volutpat diam sapien, id sagittis metus dignissim luctus.',
      deadline: '2021-12-15',
    },
  },
  {
    id: undefined,
    thumbnail: '../../assets/images/me.jpg',
    name: 'Andreas Skomsøy',
    location: 'Kent, England',
    company: 'Yoobic',
    rating: { decimal: 4.5 },
    date: '2021-12-12',
    distance: '',
    geoLocation: { latitude: 51.14, longitude: 1.37 },
    picture: '../../assets/images/mission4.jpg',
    description: {
      title: 'Lorem Ipsum',
      intro:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio condimentum, facilisis ligula vitae, eleifend.',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus nisl, ullamcorper vel sem eget, ornare dictum velit. Cras quis laoreet purus, quis eleifend nibh. Maecenas eget pellentesque enim, ac ultrices magna. Quisque interdum mi et nibh vulputate varius. Etiam lacinia pharetra sollicitudin. Aenean in tincidunt tortor. Vestibulum eleifend quis tellus eget dapibus. Pellentesque molestie risus vel hendrerit pellentesque. In ut augue ac lacus rutrum convallis a quis ipsum. Suspendisse a bibendum dui. Etiam volutpat diam sapien, id sagittis metus dignissim luctus.',
      deadline: '2021-12-24',
    },
  },
  {
    id: undefined,
    thumbnail: '../../assets/images/me.jpg',
    name: 'Andreas Skomsøy',
    location: 'Inverness, Scotland',
    company: 'Yoobic',
    rating: { decimal: 4.3 },
    date: '2021-12-25',
    distance: '',
    geoLocation: { latitude: 57.4778, longitude: -4.2247 },
    picture: '../../assets/images/mission5.jpg',
    description: {
      title: 'Lorem Ipsum',
      intro:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio condimentum, facilisis ligula vitae, eleifend.',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus nisl, ullamcorper vel sem eget, ornare dictum velit. Cras quis laoreet purus, quis eleifend nibh. Maecenas eget pellentesque enim, ac ultrices magna. Quisque interdum mi et nibh vulputate varius. Etiam lacinia pharetra sollicitudin. Aenean in tincidunt tortor. Vestibulum eleifend quis tellus eget dapibus. Pellentesque molestie risus vel hendrerit pellentesque. In ut augue ac lacus rutrum convallis a quis ipsum. Suspendisse a bibendum dui. Etiam volutpat diam sapien, id sagittis metus dignissim luctus.',
      deadline: '2021-12-30',
    },
  },
  {
    id: undefined,
    thumbnail: '../../assets/images/me.jpg',
    name: 'Andreas Skomsøy',
    location: 'Southern Anglesey, Wales',
    company: 'Yoobic',
    rating: { decimal: 3.6 },
    date: '2022-01-01',
    distance: '',
    geoLocation: { latitude: 53.2077, longitude: -4.2361 },
    picture: '../../assets/images/mission6.jpg',
    description: {
      title: 'Lorem Ipsum',
      intro:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio condimentum, facilisis ligula vitae, eleifend.',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus nisl, ullamcorper vel sem eget, ornare dictum velit. Cras quis laoreet purus, quis eleifend nibh. Maecenas eget pellentesque enim, ac ultrices magna. Quisque interdum mi et nibh vulputate varius. Etiam lacinia pharetra sollicitudin. Aenean in tincidunt tortor. Vestibulum eleifend quis tellus eget dapibus. Pellentesque molestie risus vel hendrerit pellentesque. In ut augue ac lacus rutrum convallis a quis ipsum. Suspendisse a bibendum dui. Etiam volutpat diam sapien, id sagittis metus dignissim luctus.',
      deadline: '2022-02-27',
    },
  },
];
