### BrowserCheck

- 현재 브라우저를 어떤것을 사용하고 있는지 파악하는 함수
- 브라우저의 특성에 따라서 차이가 있으므로 파악하여 브라우저에 맞게 적용한다.

- 구현

  - 브라우저를 체크 하기 위해서는 javascript에서 지원하는 Navigator라는 객체를 이해해야한다.

  ````ts
      const NavigatorAgent = {
        appCodeName: "Mozilla", // 브라우저의 코드명을 반환
        appName: "Netscape" , // 브라우저의 이름을 반환
        appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36", // 브라우저의 버전을 반환
        bluetooth: Bluetooth {},
        clipboard: Clipboard {},
        connection: NetworkInformation {onchange: null, effectiveType: '4g', rtt: 50, downlink: 10, saveData: false},
        cookieEnabled: true, // 브라우저의 쿠키 사용 가능 여부 반환
        credentials: CredentialsContainer {},
        deviceMemory: 8,
        doNotTrack: null,
        geolocation: Geolocation {},
        gpu:  GPU {wgslLanguageFeatures: WGSLLanguageFeatures},
        hardwareConcurrency: 12,
        hid: HID {onconnect: null, ondisconnect: null},
        ink: Ink {},
        keyboard: Keyboard {},
        language: "ko-KR", // 브라우저에서 사용되는 언어를 반환
        languages: (4) ['ko-KR', 'ko', 'en-US', 'en'],
        locks: LockManager {},
        managed: NavigatorManagedData {onmanagedconfigurationchange: null},
        maxTouchPoints: 0,
        mediaCapabilities: MediaCapabilities {},
        mediaDevices: MediaDevices {ondevicechange: null},
        mediaSession: MediaSession {metadata: null, playbackState: 'none'},
        mimeTypes: MimeTypeArray {0: MimeType, 1: MimeType, application/pdf: MimeType, text/pdf: MimeType, length: 2},
        onLine: true, // 브라우저가 온라인인지 여부 반환
        pdfViewerEnabled: true,
        permissions: Permissions {},
        platform: "Win32", // 브라우저에서 사용되는 엔진 이름 반환
        plugins: PluginArray {0: Plugin, 1: Plugin, 2: Plugin, 3: Plugin, 4: Plugin, PDF Viewer: Plugin, Chrome PDF Viewer: Plugin, Chromium PDF Viewer: Plugin, Microsoft Edge PDF Viewer: Plugin, WebKit built-in PDF: Plugin, …},
        presentation: Presentation {defaultRequest: null, receiver: null},
        product: "Gecko",
        productSub: "20030107",
        scheduling: Scheduling {},
        serial: Serial {onconnect: null, ondisconnect: null},
        serviceWorker: ServiceWorkerContainer {controller: null, ready: Promise, oncontrollerchange: null, onmessage: null, onmessageerror: null},
        storage: StorageManager {},
        usb: USB {onconnect: null, ondisconnect: null},
        userActivation: UserActivation {hasBeenActive: true, isActive: true},
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36", // 브라우저와 운영체제 정보 반환
        userAgentData: NavigatorUAData {brands: Array(3), mobile: false, platform: 'Windows'},
        vendor: "Google Inc.",
        vendorSub: "",
        virtualKeyboard: VirtualKeyboard {boundingRect: DOMRect, overlaysContent: false, ongeometrychange: null},
        wakeLock: WakeLock {},
        webdriver: false,
        webkitPersistentStorage: DeprecatedStorageQuota {},
        webkitTemporaryStorage: DeprecatedStorageQuota {},
        windowControlsOverlay: WindowControlsOverlay {visible: false, ongeometrychange: null},
        xr: XRSystem {ondevicechange: null},
      }
      ```
  ````

  - 브라우저와 운영체제 정보를 반환 받는다.
  - Navigator 를 이해 되었다고 한다면 indexOf 를 통해서 이름이 있는지 없는지를 확인한다.
