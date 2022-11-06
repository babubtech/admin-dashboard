/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { colors } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatIcon from '@mui/icons-material/ChatOutlined';
import CodeIcon from '@mui/icons-material/Code';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SettingIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import ErrorIcon from '@mui/icons-material/ErrorOutline';
import FolderIcon from '@mui/icons-material/FolderOutlined';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LockOpenIcon from '@mui/icons-material/LockOpenOutlined';
import MailIcon from '@mui/icons-material/MailOutlined';
// import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import PersonIcon from '@mui/icons-material/PersonOutlined';
import ReceiptIcon from '@mui/icons-material/ReceiptOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FeedIcon from '@mui/icons-material/Feed';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SupportIcon from '@mui/icons-material/Support';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LockResetIcon from '@mui/icons-material/LockReset';

import Label from './components/label';

export default [
  {
    title: 'Analytics',
    pages: [
      {
        title: 'Dashboard',
        href: '/dashboard',
        icon: HomeIcon
      },
      // {
      //   title: 'Dashboards',
      //   href: '/dashboards',
      //   icon: DashboardIcon,
      //   children: [
      //     {
      //       title: 'Default',
      //       href: '/dashboards/default'
      //     },
      //     {
      //       title: 'Analytics',
      //       href: '/dashboards/analytics'
      //     }
      //   ]
      // },
      {
        title: 'Matrimony Dashboard',
        href: '/',
        icon: BarChartIcon,
      },
      // {
      //   title: 'Profile',
      //   href: '/',
      //   icon: PersonIcon,
      //   children: [
      //     {
      //       title: 'Timeline',
      //       href: '/'
      //     },
      //     {
      //       title: 'Connections',
      //       href: '/'
      //     },
      //     {
      //       title: 'Projects',
      //       href: '/'
      //     },
      //     {
      //       title: 'Reviews',
      //       href: '/'
      //     }
      //   ]
      // },
      // {
      //   title: 'Project',
      //   href: '/',
      //   icon: FolderIcon,
      //   children: [
      //     {
      //       title: 'Browse',
      //       href: '/'
      //     },
      //     {
      //       title: 'Create',
      //       href: '/'
      //     },
      //     {
      //       title: 'Overview',
      //       href: '/'
      //     },
      //     {
      //       title: 'Files',
      //       href: '/'
      //     },
      //     {
      //       title: 'Activity',
      //       href: '/'
      //     },
      //     {
      //       title: 'Subscribers',
      //       href: '/'
      //     }
      //   ]
      // },
      // {
      //   title: 'Mail',
      //   href: '/',
      //   icon: MailIcon,
      //   label: () => (
      //     <Label
      //       color={colors.red[500]}
      //       shape="rounded"
      //     >
      //       2
      //     </Label>
      //   )
      // },
      // {
      //   title: 'Chat',
      //   href: '/',
      //   icon: ChatIcon,
      //   label: () => (
      //     <Label
      //       color={colors.red[500]}
      //       shape="rounded"
      //     >
      //       4
      //     </Label>
      //   )
      // },
      // {
      //   title: 'Calendar',
      //   href: '/',
      //   icon: CalendarTodayIcon,
      //   label: () => <Label color={colors.green[500]}>New</Label>
      // },
      // {
      //   title: 'Settings',
      //   href: '/',
      //   icon: SettingsIcon,
      //   children: [
      //     {
      //       title: 'General',
      //       href: '/'
      //     },
      //     {
      //       title: 'Subscription',
      //       href: '/'
      //     },
      //     {
      //       title: 'Notifications',
      //       href: '/'
      //     },
      //     {
      //       title: 'Security',
      //       href: '/'
      //     }
      //   ]
      // },
      // {
      //   title: 'Authentication',
      //   href: '/',
      //   icon: LockOpenIcon,
      //   children: [
      //     {
      //       title: 'Login',
      //       href: '/'
      //     },
      //     {
      //       title: 'Register',
      //       href: '//register'
      //     }
      //   ]
      // },
      {
        title: 'Errors',
        href: '/',
        icon: ErrorIcon,
        children: [
          {
            title: 'Error 401',
            href: '/'
          },
          {
            title: 'Error 404',
            href: '/'
          },
          {
            title: 'Error 500',
            href: '/'
          }
        ]
      }
    ]
  },
  {
    title: "Masters",
    pages: [
      {
        title: 'User Status Master',
        href: '/users',
        icon: PeopleIcon
      },
      {
        title: "Feed Category Master",
        href: "/",
        icon: ReceiptIcon
      },
      {
        title: "Kulam Master",
        href: "/",
        icon: ListAltIcon
      }
    ]
  },
  {
    title: "User Management",
    pages: [
      {
        title: 'App Users',
        href: '/users',
        icon: PeopleIcon
      },
      {
        title: 'Admin Users',
        href: '/',
        icon: GroupAddIcon
      },
      {
        title: 'Events',
        href: '/',
        icon: CalendarTodayIcon
      },
      {
        title: 'Chat',
        href: '/',
        icon: ChatIcon,
        label: () => (
          <Label
            color={colors.red[500]}
            shape="rounded"
          >
            4
          </Label>
        )
      }
    ]
  },
  {
    title: "Feed",
    pages: [
      {
        title: 'Posts',
        href: '/',
        icon: FeedIcon
      }
    ]
  },
  {
    title: "Matrimony",
    pages: [
      {
        title: 'Profiles',
        href: '/',
        icon: AssignmentIndIcon
      },
      {
        title: 'Subscriptions',
        href: '/',
        icon: CardMembershipIcon
      },
      {
        title: 'Plans',
        href: '/',
        icon: WorkspacePremiumIcon
      }
    ]
  },
  {
    title: 'Settings',
    pages: [
      {
        title: 'Support',
        href: '/',
        icon: SupportIcon
      },
      {
        title: 'Announcement',
        href: '/',
        icon: AnnouncementIcon
      },
      {
        title: 'Profile',
        href: '/profile',
        icon: AdminPanelSettingsIcon
      },
      {
        title: 'Change Password',
        href: '/',
        icon: LockResetIcon
      },
      {
        title: 'Changelog',
        href: '/',
        icon: ViewModuleIcon,
        label: () => <Label color={colors.blue['500']}>v1.2.0</Label>
      }
    ]
  }
];
