# Testing Strategy & Quality Assurance
## Professor S. Govindasamy's Legacy Website - Comprehensive Testing Framework

### 🎯 Testing Objectives
- **Functionality**: All features work as designed
- **Multilingual**: Tamil and English content display correctly
- **Performance**: Fast loading and responsive design
- **Accessibility**: WCAG 2.1 AA compliance
- **Cross-browser**: Consistent experience across browsers
- **Academic Standards**: Professional quality for academic audience

---

## 🧪 Testing Framework Setup

### 1. Unit Testing
**Framework**: Jest + React Testing Library

#### 1.1 Package Dependencies
```json
{
  "devDependencies": {
    "@testing-library/react": "^13.4.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/user-event": "^14.4.3",
    "jest": "^29.3.1",
    "jest-environment-jsdom": "^29.3.1"
  }
}
```

#### 1.2 Jest Configuration
```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapping: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/main.tsx',
    '!src/vite-env.d.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
```

#### 1.3 Sample Unit Tests
```typescript
// src/components/__tests__/StudentCard.test.tsx
import { render, screen } from '@testing-library/react';
import { StudentCard } from '../StudentCard';
import { mockStudent } from '../../__mocks__/studentData';

describe('StudentCard Component', () => {
  test('renders student information correctly', () => {
    render(<StudentCard student={mockStudent} />);
    
    expect(screen.getByText(mockStudent.name.en)).toBeInTheDocument();
    expect(screen.getByText(mockStudent.currentPosition.en)).toBeInTheDocument();
    expect(screen.getByAltText(`Photo of ${mockStudent.name.en}`)).toBeInTheDocument();
  });

  test('switches language correctly', () => {
    render(<StudentCard student={mockStudent} language="ta" />);
    
    expect(screen.getByText(mockStudent.name.ta)).toBeInTheDocument();
    expect(screen.getByText(mockStudent.currentPosition.ta)).toBeInTheDocument();
  });
});
```

### 2. Integration Testing
**Framework**: React Testing Library + MSW (Mock Service Worker)

#### 2.1 API Mocking Setup
```typescript
// src/__mocks__/handlers.ts
import { rest } from 'msw';

export const handlers = [
  rest.get('/data/core/students.json', (req, res, ctx) => {
    return res(ctx.json({ students: mockStudentsData }));
  }),
  
  rest.get('/data/gallery/images.json', (req, res, ctx) => {
    return res(ctx.json({ images: mockGalleryData }));
  })
];
```

#### 2.2 Integration Test Examples
```typescript
// src/pages/__tests__/StudentsPage.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StudentsPage } from '../StudentsPage';

describe('Students Page Integration', () => {
  test('loads and displays student list', async () => {
    render(<StudentsPage />);
    
    await waitFor(() => {
      expect(screen.getByText('Dr. Rajesh Kumar')).toBeInTheDocument();
    });
  });

  test('search functionality works', async () => {
    const user = userEvent.setup();
    render(<StudentsPage />);
    
    const searchInput = screen.getByPlaceholderText('Search students...');
    await user.type(searchInput, 'Rajesh');
    
    await waitFor(() => {
      expect(screen.getByText('Dr. Rajesh Kumar')).toBeInTheDocument();
      expect(screen.queryByText('Dr. Priya Sharma')).not.toBeInTheDocument();
    });
  });
});
```

### 3. End-to-End Testing
**Framework**: Playwright

#### 3.1 Playwright Configuration
```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4173',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  webServer: {
    command: 'npm run preview',
    port: 4173,
  },
});
```

#### 3.2 E2E Test Examples
```typescript
// e2e/navigation.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Website Navigation', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/');
    
    await expect(page).toHaveTitle(/Professor.*Academic Legacy/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('language switching works', async ({ page }) => {
    await page.goto('/');
    
    // Switch to Tamil
    await page.getByRole('button', { name: 'தமிழ்' }).click();
    await expect(page.getByText(/பேராசிரியர்/)).toBeVisible();
    
    // Switch back to English
    await page.getByRole('button', { name: 'English' }).click();
    await expect(page.getByText(/Professor/)).toBeVisible();
  });

  test('student directory navigation', async ({ page }) => {
    await page.goto('/');
    
    await page.getByRole('link', { name: 'Students' }).click();
    await expect(page).toHaveURL(/.*students/);
    
    // Click on first student
    await page.getByRole('link', { name: /Dr\..*/ }).first().click();
    await expect(page).toHaveURL(/.*students\/.*/);
  });
});
```

---

## 🌐 Cross-Browser Testing

### 1. Browser Support Matrix
| Browser | Desktop | Mobile | Priority |
|---------|---------|---------|----------|
| Chrome | ✅ Latest 2 versions | ✅ Latest 2 versions | High |
| Firefox | ✅ Latest 2 versions | ✅ Latest 2 versions | High |
| Safari | ✅ Latest 2 versions | ✅ Latest 2 versions | High |
| Edge | ✅ Latest 2 versions | ✅ Latest 2 versions | Medium |
| Samsung Internet | ❌ | ✅ Latest version | Medium |

### 2. Cross-Browser Test Cases
```typescript
// e2e/cross-browser.spec.ts
import { test, expect, devices } from '@playwright/test';

const browsers = ['chromium', 'firefox', 'webkit'];

browsers.forEach(browserName => {
  test.describe(`${browserName} specific tests`, () => {
    test('Tamil font rendering', async ({ page }) => {
      await page.goto('/?lang=ta');
      
      const tamilText = page.getByText(/பேராசிரியர்/);
      await expect(tamilText).toBeVisible();
      
      // Check font rendering
      const fontFamily = await tamilText.evaluate(el => 
        getComputedStyle(el).fontFamily
      );
      expect(fontFamily).toContain('Noto Sans Tamil');
    });
  });
});
```

---

## 📱 Responsive Design Testing

### 1. Breakpoint Testing
```typescript
// e2e/responsive.spec.ts
import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'Mobile', width: 375, height: 667 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Desktop', width: 1440, height: 900 },
  { name: 'Large Desktop', width: 1920, height: 1080 }
];

viewports.forEach(viewport => {
  test.describe(`${viewport.name} (${viewport.width}x${viewport.height})`, () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize(viewport);
    });

    test('navigation is accessible', async ({ page }) => {
      await page.goto('/');
      
      if (viewport.width < 768) {
        // Mobile: check hamburger menu
        await expect(page.getByRole('button', { name: 'Menu' })).toBeVisible();
      } else {
        // Desktop: check full navigation
        await expect(page.getByRole('navigation')).toBeVisible();
      }
    });

    test('student cards layout', async ({ page }) => {
      await page.goto('/students');
      
      const cards = page.getByTestId('student-card');
      const count = await cards.count();
      
      // Verify responsive grid layout
      if (viewport.width >= 1440) {
        // Large desktop: 4 columns
        expect(count).toBeGreaterThan(0);
      } else if (viewport.width >= 768) {
        // Tablet: 2-3 columns
        expect(count).toBeGreaterThan(0);
      } else {
        // Mobile: 1 column
        expect(count).toBeGreaterThan(0);
      }
    });
  });
});
```

---

## ♿ Accessibility Testing

### 1. Automated Accessibility Testing
```typescript
// e2e/accessibility.spec.ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Tests', () => {
  test('homepage accessibility', async ({ page }) => {
    await page.goto('/');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('keyboard navigation', async ({ page }) => {
    await page.goto('/');
    
    // Tab through navigation
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: 'Home' })).toBeFocused();
    
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: 'About' })).toBeFocused();
  });

  test('screen reader compatibility', async ({ page }) => {
    await page.goto('/students');
    
    // Check ARIA labels
    const studentCards = page.getByRole('article');
    for (let i = 0; i < await studentCards.count(); i++) {
      const card = studentCards.nth(i);
      await expect(card).toHaveAttribute('aria-label');
    }
  });
});
```

### 2. Manual Accessibility Checklist
- [ ] **Keyboard Navigation**: All interactive elements accessible via keyboard
- [ ] **Screen Reader**: Content properly announced by screen readers
- [ ] **Color Contrast**: Minimum 4.5:1 ratio for normal text, 3:1 for large text
- [ ] **Focus Indicators**: Visible focus indicators for all interactive elements
- [ ] **Alt Text**: Descriptive alt text for all images
- [ ] **Headings**: Proper heading hierarchy (H1 → H2 → H3)
- [ ] **ARIA Labels**: Appropriate ARIA labels for complex components

---

## 🚀 Performance Testing

### 1. Core Web Vitals Testing
```typescript
// e2e/performance.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('Core Web Vitals', async ({ page }) => {
    await page.goto('/');
    
    // Measure LCP (Largest Contentful Paint)
    const lcp = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry.startTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      });
    });
    
    expect(lcp).toBeLessThan(2500); // LCP should be < 2.5s
  });

  test('image loading performance', async ({ page }) => {
    await page.goto('/gallery');
    
    // Check lazy loading
    const images = page.getByRole('img');
    const imageCount = await images.count();
    
    // Only visible images should be loaded initially
    const loadedImages = await page.evaluate(() => {
      const imgs = document.querySelectorAll('img');
      return Array.from(imgs).filter(img => img.complete).length;
    });
    
    expect(loadedImages).toBeLessThan(imageCount);
  });
});
```

### 2. Performance Benchmarks
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **First Input Delay**: < 100ms
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

---

## 🌍 Multilingual Testing

### 1. Language Switching Tests
```typescript
// e2e/multilingual.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Multilingual Functionality', () => {
  test('content switches between Tamil and English', async ({ page }) => {
    await page.goto('/');
    
    // Check English content
    await expect(page.getByText(/Professor/)).toBeVisible();
    
    // Switch to Tamil
    await page.getByRole('button', { name: 'தமிழ்' }).click();
    await expect(page.getByText(/பேராசிரியர்/)).toBeVisible();
    
    // Verify URL parameter
    expect(page.url()).toContain('lang=ta');
  });

  test('Tamil font rendering', async ({ page }) => {
    await page.goto('/?lang=ta');
    
    const tamilElements = page.getByText(/[\u0B80-\u0BFF]+/);
    const count = await tamilElements.count();
    
    expect(count).toBeGreaterThan(0);
    
    // Check font family
    const fontFamily = await tamilElements.first().evaluate(el => 
      getComputedStyle(el).fontFamily
    );
    expect(fontFamily).toMatch(/Noto Sans Tamil|Tamil/i);
  });
});
```

---

## 📊 Test Automation & CI Integration

### 1. GitHub Actions Test Workflow
```yaml
# .github/workflows/test.yml
name: Test Suite

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  unit-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run test:unit
      - run: npm run test:coverage

  e2e-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npx playwright install
      - run: npm run build
      - run: npm run test:e2e
```

### 2. Test Scripts in package.json
```json
{
  "scripts": {
    "test": "jest",
    "test:unit": "jest --coverage",
    "test:watch": "jest --watch",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:accessibility": "playwright test --grep accessibility"
  }
}
```

---

## 📋 Testing Checklist

### Pre-Development Testing Setup
- [ ] Jest and React Testing Library configured
- [ ] Playwright E2E testing setup
- [ ] Accessibility testing tools installed
- [ ] Performance testing benchmarks defined
- [ ] Cross-browser testing matrix established

### Development Testing
- [ ] Unit tests for all components
- [ ] Integration tests for page functionality
- [ ] Multilingual content testing
- [ ] Responsive design testing
- [ ] Accessibility compliance testing

### Pre-Deployment Testing
- [ ] Full E2E test suite passes
- [ ] Performance benchmarks met
- [ ] Cross-browser compatibility verified
- [ ] Accessibility audit completed
- [ ] Manual testing on real devices

---

**Last Updated**: August 2, 2025  
**Version**: 1.0  
**Test Coverage Target**: 80%  
**Review Schedule**: Monthly test strategy review
