import { BsHouseFill, BsBellFill, BsSearch } from 'react-icons/bs';
import { FaUser} from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi'

import useCurrentUser from '@/hooks/useCurrentUser';

import MenuLogo from './MenuLogo';
import MenuLateralItem from './MenuLateralItem';
import MenuLateralUpload from './MenuLateralUpload';

import { signOut } from "next-auth/react"


const MenuLateral = () => {
    const { data: currentUser } = useCurrentUser();

    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill,
            auth: true
        },
        {
            label: 'Buscar',
            href: '/buscar',
            icon: BsSearch
        },
        {
            label: 'Notificações',
            href: '/notificações',
            icon: BsBellFill,
            auth: true   
        },
        {
            label: 'Perfil',
            href: '/users/123',
            icon: FaUser,
            auth: true
        }   
    ];
    return( 
        <div className='col-span-1 h-full pr-4 md:pr-6'>
            <div className='flex flex-col items-end'>
                <div className='space-y-2 lg:w-[230px] "flex-grow"  '>
                    <MenuLogo />
                    {items.map((item) => (
                        <MenuLateralItem
                           key={item.href}
                           href={item.href}
                           label={item.label}
                           icon={item.icon}
                           auth={item.auth}
                        />
                    ))}
                    <MenuLateralUpload />
                    <div className='mt-10'>
                    {currentUser && (    
                        <MenuLateralItem onClick={() => signOut()} icon={BiLogOut} label='Sair' />
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuLateral;