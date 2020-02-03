import React from 'react';
import Switch from 'react-switch';
import { MdCloudUpload } from 'react-icons/md';
import { HeaderContent, Logo } from './styles';

const Header = () => {    
    return (
        <HeaderContent>
        <Logo><MdCloudUpload fontSize={40}/></Logo>
        <Switch 
        onChange={()=> {}}
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={30}
        handleDiameter={20}
        offColor="#555"
        onColor="#2b5828"
        />
    </HeaderContent>
    );
};

export default Header;
