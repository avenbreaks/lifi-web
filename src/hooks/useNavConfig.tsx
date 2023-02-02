import { CaretDownOutlined } from '@ant-design/icons'
import { useMemo } from 'react'

import WalletButtons from '../components/web3/WalletButtons'
import { useIsMobile } from './useIsMobile'

export const useNavConfig = () => {
  const isMobile = useIsMobile()

  const navConfig = useMemo(() => {
    return [
      {
        label: (
          <span className="lifi-more-submenu-title-wrapper">
            More <CaretDownOutlined className="lifi-more-submenu-title-icon" />
          </span>
        ),
        key: 'lifi-more-submenu',
        disabled: false,
        children: [
          
          {
            label: (
              <a href="https://blog.li.fi/" target="_blank" rel="nofollow noreferrer">
                Blog
              </a>
            ),
            key: 'blog',
          },
          {
            label: (
              <a href="https://docs.gitshock/" target="_blank" rel="nofollow noreferrer">
                Explore Docs
              </a>
            ),
            key: 'docs',
          },
          {
            label: (
              <a href="https://gitshock.com/" target="_blank" rel="nofollow noreferrer">
                About
              </a>
            ),
            key: 'about',
          },
          {
            label: (
              <a href="https://github.com/gitshock-labs" target="_blank" rel="nofollow noreferrer">
                Github
              </a>
            ),
            key: 'github',
          },
          {
            label: (
              <a href="https://twitter.com/gitshock" target="_blank" rel="nofollow noreferrer">
                Twitter
              </a>
            ),
            key: 'twitter',
          },
          {
            label: 'Legals',
            key: 'legals-submenu',
            children: [
              {
                label: (
                  <a href="https://li.fi/legal/privacy-policy/" target={'_blank'} rel="noreferrer">
                    Privacy Policy
                  </a>
                ),
                key: 'privacy',
              },
              {
                label: (
                  <a href="https://li.fi/legal/imprint/" target={'_blank'} rel="noreferrer">
                    Imprint
                  </a>
                ),
                key: 'imprint',
              },
              {
                label: (
                  <a
                    href="https://li.fi/legal/terms-and-conditions/"
                    target={'_blank'}
                    rel="noreferrer">
                    Terms & Conditions
                  </a>
                ),
                key: 'termsAndConditions',
              },
            ],
          },
        ],
      },
      isMobile
        ? {
            key: 'wallet-button',
            label: <WalletButtons></WalletButtons>,
          }
        : null,
    ]
  }, [isMobile])

  return navConfig
}
