export const openElevenLabsAgent = (): void => {
  if (typeof window === 'undefined') return

  const attemptOpen = (): boolean => {
    const widget = document.querySelector('elevenlabs-convai') as HTMLElement & {
      open?: () => void
      openConversation?: () => void
      startConversation?: () => void
    }

    if (!widget) {
      console.log('ElevenLabs: Widget element not found, retrying...')
      return false
    }

    console.log('ElevenLabs: Widget found, attempting to open...')

    // Try different methods that might be available on the widget
    if (typeof widget.open === 'function') {
      console.log('ElevenLabs: Using open() method')
      widget.open()
      return true
    }

    if (typeof widget.openConversation === 'function') {
      console.log('ElevenLabs: Using openConversation() method')
      widget.openConversation()
      return true
    }

    if (typeof widget.startConversation === 'function') {
      console.log('ElevenLabs: Using startConversation() method')
      widget.startConversation()
      return true
    }

    // Try to access shadow root and click the button
    const shadowRoot = widget.shadowRoot
    if (shadowRoot) {
      console.log('ElevenLabs: Accessing shadow root')
      
      // Try various button selectors
      const buttonSelectors = [
        'button[class*="trigger"]',
        'button[class*="open"]',
        'button[class*="start"]',
        'button',
      ]

      for (const selector of buttonSelectors) {
        const button = shadowRoot.querySelector(selector) as HTMLButtonElement
        if (button) {
          console.log(`ElevenLabs: Found button with selector: ${selector}`)
          button.click()
          return true
        }
      }

      // Try to find any clickable element
      const clickableElement = shadowRoot.querySelector('[role="button"]') as HTMLElement
      if (clickableElement) {
        console.log('ElevenLabs: Found clickable element with role=button')
        clickableElement.click()
        return true
      }
    }

    console.log('ElevenLabs: No open method or button found')
    return false
  }

  // Try to open immediately
  if (attemptOpen()) {
    console.log('ElevenLabs: Successfully opened on first attempt')
    return
  }

  console.log('ElevenLabs: First attempt failed, scheduling retries...')

  // If immediate attempt fails, retry with delays
  const retryIntervals = [100, 300, 500, 1000, 2000]
  let retryIndex = 0

  const retryOpen = (): void => {
    if (attemptOpen()) {
      console.log(`ElevenLabs: Successfully opened after retry #${retryIndex + 1}`)
      return
    }

    if (retryIndex >= retryIntervals.length - 1) {
      console.error('ElevenLabs: Failed to open widget after all retries')
      return
    }

    retryIndex++
    setTimeout(retryOpen, retryIntervals[retryIndex])
  }

  setTimeout(retryOpen, retryIntervals[0])
}

export const hideBranding = (): void => {
  if (typeof window === 'undefined') return

  const attemptHide = (): void => {
    const widget = document.querySelector('elevenlabs-convai')
    if (!widget) return

    // Try to access shadow root
    const shadowRoot = widget.shadowRoot
    if (shadowRoot) {
      // Find and hide branding elements in shadow DOM
      const brandingSelectors = [
        '[class*="powered"]',
        '[class*="branding"]',
        '[class*="footer"]',
        'a[href*="elevenlabs"]',
        'a[href*="Agents"]',
      ]

      brandingSelectors.forEach((selector) => {
        const elements = shadowRoot.querySelectorAll(selector)
        elements.forEach((el) => {
          if (el instanceof HTMLElement) {
            el.style.display = 'none'
            el.style.visibility = 'hidden'
            el.style.opacity = '0'
            el.style.height = '0'
            el.style.overflow = 'hidden'
            el.style.pointerEvents = 'none'
          }
        })
      })

      // Also try to find any text nodes containing "Powered by"
      const walker = document.createTreeWalker(
        shadowRoot,
        NodeFilter.SHOW_TEXT,
        null
      )

      const textNodesToHide: Node[] = []
      let node: Node | null
      while ((node = walker.nextNode())) {
        if (node.textContent && /powered\s+by/i.test(node.textContent)) {
          textNodesToHide.push(node)
        }
      }

      textNodesToHide.forEach((textNode) => {
        const parent = textNode.parentElement
        if (parent) {
          parent.style.display = 'none'
          parent.style.visibility = 'hidden'
        }
      })
    }

    // Inject CSS into shadow DOM if possible
    try {
      if (shadowRoot) {
        const style = document.createElement('style')
        style.textContent = `
          [class*="powered"],
          [class*="branding"],
          [class*="footer"],
          a[href*="elevenlabs"],
          a[href*="Agents"] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            height: 0 !important;
            width: 0 !important;
            overflow: hidden !important;
            pointer-events: none !important;
          }
        `
        shadowRoot.appendChild(style)
      }
    } catch {
      // Shadow DOM might be closed
    }
  }

  // Try immediately
  attemptHide()

  // Try after a short delay
  setTimeout(attemptHide, 100)
  setTimeout(attemptHide, 500)
  setTimeout(attemptHide, 1000)
  setTimeout(attemptHide, 2000)

  // Observe DOM changes
  const observer = new MutationObserver(() => {
    attemptHide()
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })
}

