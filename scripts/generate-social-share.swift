import AppKit
import Foundation

let root = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
let backgroundURL = root.appendingPathComponent("src/assets/social-share-background.png")
let logoURL = root.appendingPathComponent("src/assets/braingig-logo-light.png")
let outputURL = root.appendingPathComponent("public/social-share.png")

let canvasWidth: CGFloat = 1200
let canvasHeight: CGFloat = 630
let canvasRect = NSRect(x: 0, y: 0, width: canvasWidth, height: canvasHeight)

func loadImage(_ url: URL) -> NSImage {
    guard let image = NSImage(contentsOf: url) else {
        fatalError("Could not load image at \(url.path)")
    }
    return image
}

func rectFromTop(x: CGFloat, y: CGFloat, width: CGFloat, height: CGFloat) -> NSRect {
    NSRect(x: x, y: canvasHeight - y - height, width: width, height: height)
}

func coverSourceRect(for image: NSImage, targetRatio: CGFloat) -> NSRect {
    let size = image.size
    let sourceRatio = size.width / size.height

    if sourceRatio > targetRatio {
        let cropWidth = size.height * targetRatio
        return NSRect(x: (size.width - cropWidth) / 2, y: 0, width: cropWidth, height: size.height)
    }

    let cropHeight = size.width / targetRatio
    return NSRect(x: 0, y: (size.height - cropHeight) / 2, width: size.width, height: cropHeight)
}

func drawRoundedRect(_ rect: NSRect, radius: CGFloat, fill: NSColor, stroke: NSColor? = nil, lineWidth: CGFloat = 1) {
    let path = NSBezierPath(roundedRect: rect, xRadius: radius, yRadius: radius)
    fill.setFill()
    path.fill()

    if let stroke {
        stroke.setStroke()
        path.lineWidth = lineWidth
        path.stroke()
    }
}

func drawText(_ text: String, in rect: NSRect, size: CGFloat, weight: NSFont.Weight, color: NSColor, lineHeightMultiple: CGFloat = 1.0) {
    let paragraph = NSMutableParagraphStyle()
    paragraph.lineBreakMode = .byWordWrapping
    paragraph.lineHeightMultiple = lineHeightMultiple

    let attributes: [NSAttributedString.Key: Any] = [
        .font: NSFont.systemFont(ofSize: size, weight: weight),
        .foregroundColor: color,
        .paragraphStyle: paragraph
    ]

    text.draw(with: rect, options: [.usesLineFragmentOrigin, .usesFontLeading], attributes: attributes)
}

let background = loadImage(backgroundURL)
let logo = loadImage(logoURL)
guard let bitmap = NSBitmapImageRep(
    bitmapDataPlanes: nil,
    pixelsWide: Int(canvasWidth),
    pixelsHigh: Int(canvasHeight),
    bitsPerSample: 8,
    samplesPerPixel: 4,
    hasAlpha: true,
    isPlanar: false,
    colorSpaceName: .deviceRGB,
    bytesPerRow: 0,
    bitsPerPixel: 0
) else {
    fatalError("Could not create bitmap canvas")
}

bitmap.size = NSSize(width: canvasWidth, height: canvasHeight)

guard let graphicsContext = NSGraphicsContext(bitmapImageRep: bitmap) else {
    fatalError("Could not create graphics context")
}

NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = graphicsContext
graphicsContext.imageInterpolation = .high

background.draw(
    in: canvasRect,
    from: coverSourceRect(for: background, targetRatio: canvasWidth / canvasHeight),
    operation: .copy,
    fraction: 1
)

NSGradient(colorsAndLocations:
    (NSColor(calibratedRed: 0.02, green: 0.17, blue: 0.19, alpha: 0.96), 0.0),
    (NSColor(calibratedRed: 0.02, green: 0.17, blue: 0.19, alpha: 0.82), 0.42),
    (NSColor(calibratedRed: 0.02, green: 0.17, blue: 0.19, alpha: 0.28), 0.74),
    (NSColor(calibratedRed: 0.02, green: 0.17, blue: 0.19, alpha: 0.10), 1.0)
)?.draw(in: canvasRect, angle: 0)

NSGradient(colorsAndLocations:
    (NSColor.black.withAlphaComponent(0.34), 0.0),
    (NSColor.black.withAlphaComponent(0.02), 0.54),
    (NSColor.black.withAlphaComponent(0.24), 1.0)
)?.draw(in: canvasRect, angle: 90)

let logoWidth: CGFloat = 430
let logoHeight = logoWidth * (logo.size.height / logo.size.width)
logo.draw(in: rectFromTop(x: 78, y: 76, width: logoWidth, height: logoHeight), from: .zero, operation: .sourceOver, fraction: 1)

let accentRect = rectFromTop(x: 80, y: 238, width: 92, height: 7)
drawRoundedRect(accentRect, radius: 3.5, fill: NSColor(calibratedRed: 0.95, green: 0.37, blue: 0.24, alpha: 1))

drawText(
    "Web Design, SEO &\nDigital Marketing in\nthe Seychelles",
    in: rectFromTop(x: 78, y: 264, width: 625, height: 158),
    size: 52,
    weight: .heavy,
    color: .white,
    lineHeightMultiple: 0.92
)

drawText(
    "Custom-built websites, online stores, branding and search strategy for island businesses.",
    in: rectFromTop(x: 82, y: 436, width: 625, height: 74),
    size: 24,
    weight: .medium,
    color: NSColor(calibratedRed: 0.90, green: 0.98, blue: 0.98, alpha: 0.92),
    lineHeightMultiple: 1.05
)

let pillRect = rectFromTop(x: 82, y: 538, width: 474, height: 42)
drawRoundedRect(
    pillRect,
    radius: 21,
    fill: NSColor.white.withAlphaComponent(0.13),
    stroke: NSColor.white.withAlphaComponent(0.20),
    lineWidth: 1
)

drawText(
    "Websites | SEO | Branding | Ecommerce",
    in: rectFromTop(x: 103, y: 548, width: 432, height: 24),
    size: 18,
    weight: .semibold,
    color: NSColor(calibratedRed: 1.0, green: 0.94, blue: 0.84, alpha: 0.95)
)

NSGraphicsContext.restoreGraphicsState()

guard let pngData = bitmap.representation(using: .png, properties: [.compressionFactor: 0.88]) else {
    fatalError("Could not encode social share image")
}

try pngData.write(to: outputURL, options: .atomic)
print(outputURL.path)
