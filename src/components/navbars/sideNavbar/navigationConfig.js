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
import AddchartIcon from '@mui/icons-material/Addchart';
import BusinessIcon from '@mui/icons-material/Business';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

import Label from './components/label';
import { AppRoutes } from '../../../router/routes';

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
        href: null,
        icon: BarChartIcon,
      },
      // {
      //   title: 'Profile',
      //   href: null,
      //   icon: PersonIcon,
      //   children: [
      //     {
      //       title: 'Timeline',
      //       href: null
      //     },
      //     {
      //       title: 'Connections',
      //       href: null
      //     },
      //     {
      //       title: 'Projects',
      //       href: null
      //     },
      //     {
      //       title: 'Reviews',
      //       href: null
      //     }
      //   ]
      // },
      // {
      //   title: 'Project',
      //   href: null,
      //   icon: FolderIcon,
      //   children: [
      //     {
      //       title: 'Browse',
      //       href: null
      //     },
      //     {
      //       title: 'Create',
      //       href: null
      //     },
      //     {
      //       title: 'Overview',
      //       href: null
      //     },
      //     {
      //       title: 'Files',
      //       href: null
      //     },
      //     {
      //       title: 'Activity',
      //       href: null
      //     },
      //     {
      //       title: 'Subscribers',
      //       href: null
      //     }
      //   ]
      // },
      // {
      //   title: 'Mail',
      //   href: null,
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
      //   href: null,
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
      //   href: null,
      //   icon: CalendarTodayIcon,
      //   label: () => <Label color={colors.green[500]}>New</Label>
      // },
      // {
      //   title: 'Settings',
      //   href: null,
      //   icon: SettingsIcon,
      //   children: [
      //     {
      //       title: 'General',
      //       href: null
      //     },
      //     {
      //       title: 'Subscription',
      //       href: null
      //     },
      //     {
      //       title: 'Notifications',
      //       href: null
      //     },
      //     {
      //       title: 'Security',
      //       href: null
      //     }
      //   ]
      // },
      // {
      //   title: 'Authentication',
      //   href: null,
      //   icon: LockOpenIcon,
      //   children: [
      //     {
      //       title: 'Login',
      //       href: null
      //     },
      //     {
      //       title: 'Register',
      //       href: '//register'
      //     }
      //   ]
      // },
      {
        title: 'Errors',
        href: null,
        icon: ErrorIcon,
        children: [
          {
            title: 'Error 401',
            href: null
          },
          {
            title: 'Error 404',
            href: null
          },
          {
            title: 'Error 500',
            href: null
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
        href: AppRoutes.statusMaster,
        icon: PeopleIcon
      },
      {
        title: "Feed Category Master",
        href: AppRoutes.categoryMaster,
        icon: ReceiptIcon
      },
      {
        title: "Kulam Master",
        href: AppRoutes.kulamMaster,
        icon: ListAltIcon
      }
    ]
  },
  {
    title: "User Management",
    pages: [
      {
        title: 'App Users',
        href: AppRoutes.users,
        icon: PeopleIcon
      },
      {
        title: 'Admin Users',
        href: null,
        icon: GroupAddIcon
      },
      {
        title: 'Events',
        href: null,
        icon: CalendarTodayIcon
      },
      {
        title: 'Chat',
        href: null,
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
        href: null,
        icon: FeedIcon
      }
    ]
  },
  {
    title: "Matrimony",
    pages: [
      {
        title: 'Profiles',
        href: null,
        icon: AssignmentIndIcon
      },
      {
        title: 'Subscriptions',
        href: null,
        icon: CardMembershipIcon
      },
      {
        title: 'Plans',
        href: null,
        icon: WorkspacePremiumIcon
      }
    ]
  },
  {
    pages: [
      {
        title: "Manage Ad",
        href: "/managead",
        icon: AddchartIcon
      },
      {
        title: "Manage Survey",
        href: null,
        icon: BusinessIcon

      },
      {
        title: "Manage App Content",
        href: null,
        icon: HomeRepairServiceIcon
      }
    ]
  },
  {
    title: 'Settings',
    pages: [
      {
        title: 'Support',
        href: null,
        icon: SupportIcon
      },
      {
        title: 'Announcement',
        href: null,
        icon: AnnouncementIcon
      },
      {
        title: 'Profile',
        href: '/profile',
        icon: AdminPanelSettingsIcon
      },
      {
        title: 'Change Password',
        href: null,
        icon: LockResetIcon
      },
      {
        title: 'Changelog',
        href: null,
        icon: ViewModuleIcon,
        label: () => <Label color={colors.blue['500']}>v1.2.0</Label>
      }
    ]
  }
];
