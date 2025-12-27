import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    const breadcrumbNameMap = {
        login: 'Login',
        register: 'Register',
        about: 'About Us',
        resources: 'All Resources',
        mdcat: 'MDCAT Prep',
        scholarships: 'Scholarships',
        workshops: 'Workshops',
        community: 'Community',
        contact: 'Contact Us',
    };

    return (
        <div className="bg-black pt-24 pb-4 px-6 lg:px-12">
            <div className="flex items-center gap-2 text-sm text-gray-400">
                <Link to="/" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                    <Home size={16} />
                    <span>Home</span>
                </Link>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    const name = breadcrumbNameMap[value] || value.charAt(0).toUpperCase() + value.slice(1);

                    return (
                        <React.Fragment key={to}>
                            <ChevronRight size={16} />
                            {isLast ? (
                                <span className="text-orange-500 font-medium">{name}</span>
                            ) : (
                                <Link to={to} className="hover:text-orange-500 transition-colors">
                                    {name}
                                </Link>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default Breadcrumb;
