declare module '*.png';
declare module '*.jpg';
declare module '*.svg';

declare module '*.ttf';
declare module '*.eot';
declare module '*.woff';
declare module '*.woff2';

declare module 'react-web-vector-icons/fonts'
declare module 'react-web-vector-icons' {

    export default  Icon=({name,size,color,font}:icon)=>any;
    export const AntDesign :any;
    export const Entypo :any;
    export const EvilIcons :any;
    export const Feather:any;
    export const FontAwesome :any;
    export const Foundation :any;
    export const Ionicons :any;
    export const MaterialCommunityIcons:any;
    export const MaterialIcons :any;
    export const Octicons :any;
    export const SimpleLineIcons :any;
    export const Zocial :any;

}
     
    
interface icon {
    name: string,
    size?: number,
    color?: string,
    font:string,
}
/*
@font-face{
  font-family:AntDesign;font-style:normal;
  font-weight:400;src:url(~/fonts/AntDesign.ttf) format('truetype')
}
@font-face{
  font-family:Entypo;font-style:normal;
  font-weight:400;src:url(fonts/Entypo.ttf) format('truetype')
}
@font-face{
  font-family:EvilIcons;
  font-style:normal;
  font-weight:400;
  src:url(fonts/EvilIcons.ttf) format('truetype')
}
@font-face{
  font-family:Feather;
  font-style:normal;
  font-weight:400;
  src:url(fonts/Feather.ttf) format('truetype')
}
@font-face{
  font-family:FontAwesome;
  font-style:normal;
  font-weight:400;
  src:url(fonts/FontAwesome.ttf) format('truetype')
}@font-face{
  font-family:FontAwesome5;
  font-style:normal;
  font-weight:400;
  src:url(fonts/FontAwesome5.ttf) format('truetype')
}
@font-face{
  font-family:FontAwesome5Brands;
  font-style:normal;
  font-weight:400;
  src:url(fonts/FontAwesome5_Brands.ttf) format('truetype')
}
@font-face{
  font-family:Foundation;
  font-style:normal;
  font-weight:400;src:url(fonts/Foundation.ttf) format('truetype')
}@font-face{
  font-family:Ionicons;
  font-style:normal;
  font-weight:400;
  src:url(fonts/Ionicons.ttf) format('truetype')
}@font-face{
  font-family:MaterialCommunityIcons;
  font-style:normal;font-weight:400;
  src:url(fonts/MaterialCommunityIcons.ttf) format('truetype')
}@font-face{
  font-family:MaterialIcons;
  font-style:normal;
  font-weight:400;
  src:url(fonts/MaterialIcons.ttf) format('truetype')
}@font-face{
  font-family:Octicons;
  font-style:normal;
  font-weight:400;src:url(fonts/Octicons.ttf) format('truetype')
}@font-face{
  font-family:SimpleLineIcons;
  ont-style:normal;
  font-weight:400;
  src:url(fonts/SimpleLineIcons.ttf) format('truetype')
}@font-face{font-family:Zocial;
  font-style:normal;
  font-weight:400;
  src:url(fonts/Zocial.ttf) format('truetype')
}
*/