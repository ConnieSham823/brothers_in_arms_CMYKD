-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 02, 2025 at 12:05 AM
-- Server version: 8.0.35
-- PHP Version: 8.2.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: brothers_in_arms
--

-- --------------------------------------------------------

--
-- Table structure for table blog
--

CREATE TABLE blog (
  blog_id int UNSIGNED NOT NULL,
  blog_title varchar(255) NOT NULL,
  blog_tag varchar(255) NOT NULL,
  blog_date date NOT NULL,
  blog_link varchar(255) NOT NULL,
  blog_content text NOT NULL,
  blog_status tinyint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table blog
--

INSERT INTO blog (blog_id, blog_title, blog_tag, blog_date, blog_link, blog_content, blog_status) VALUES
(1, 'Kickoff Meeting Sets Vision in Motion', 'Planning', '2024-01-15', 'https://example.com/1', 'The project team held its first strategy session in London, Ontario. Goals and timelines were shared, setting a strong foundation for the Brothers in Arms initiative. During the meeting, team leads outlined the project’s historical focus, key partnerships, and how public engagement will shape the final exhibit. Everyone left the room energized by the shared purpose and commitment.', 1),
(2, 'Local Veteran Shares His Story', 'Community', '2024-02-10', 'https://example.com/2', 'A retired Canadian Forces soldier visited the project site to share his personal wartime experiences, inspiring both the team and local youth. His heartfelt recollections added emotional depth to the project’s goals, reminding us of the human stories behind the history. Attendees were moved by his words and emphasized the importance of preserving such voices.', 1),
(3, 'Exhibit Designs Enter Prototype Phase', 'Design', '2024-03-20', 'https://example.com/3', 'Initial design mockups of the memorial exhibit have been approved. Interactive elements and storytelling concepts are now being tested for user engagement. The team is experimenting with audio, visual, and tactile components to create a truly immersive experience that educates and honors those who served in World War I.', 1),
(4, 'Student Volunteers Join the Mission', 'Collaboration', '2024-04-05', 'https://example.com/4', 'Fanshawe College students have joined as volunteers, contributing research and design support. Their enthusiasm has brought new energy to the project. Over the coming weeks, students will help document stories, design educational materials, and assist in preparing digital content for online and on-site visitors.', 1),
(5, 'Historic Letters Uncovered in Archive', 'Discovery', '2024-05-22', 'https://example.com/5', 'A remarkable set of World War I letters were discovered in a local archive. These artifacts will help deepen the narrative behind Brothers in Arms. The team is currently working to preserve, digitize, and translate the documents, which include firsthand accounts from soldiers describing life in the trenches and messages to their families back home.', 1);

-- --------------------------------------------------------

--
-- Table structure for table contact
--

CREATE TABLE contact (
  contact_id int UNSIGNED NOT NULL,
  contact_purpose int NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  phone varchar(255) NOT NULL,
  contact_message varchar(255) NOT NULL,
  contact_date datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  contact_status tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table contact
--

INSERT INTO contact (contact_id, contact_purpose, first_name, last_name, email, phone, contact_message, contact_date, contact_status) VALUES
(1, 1, 'Alice', 'Smith', 'alice@example.com', '123-456-7890', 'Need help with login.', '2025-03-05 12:39:16', 0),
(2, 2, 'Bob', 'Johnson', 'bob@example.com', '234-567-8901', 'Interested in product pricing.', '2025-03-05 12:39:16', 1),
(3, 3, 'Charlie', 'Brown', 'charlie@example.com', '345-678-9012', 'Looking for support options.', '2025-03-05 12:39:16', 0),
(4, 4, 'David', 'Wilson', 'david@example.com', '456-789-0123', 'Reporting a bug in the system.', '2025-03-05 12:39:16', 1),
(5, 5, 'Emma', 'Taylor', 'emma@example.com', '567-890-1234', 'General feedback about service.', '2025-03-05 12:39:16', 0);

-- --------------------------------------------------------

--
-- Table structure for table donate_tier
--

CREATE TABLE donate_tier (
  tier_id int UNSIGNED NOT NULL,
  tier_name varchar(255) NOT NULL,
  tier_goal int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table donate_tier
--

INSERT INTO donate_tier (tier_id, tier_name, tier_goal) VALUES
(1, 'Bronze', 5000),
(2, 'Silver', 15000),
(3, 'Gold', 30000),
(4, 'Diamond', 50000);

-- --------------------------------------------------------

--
-- Table structure for table donation
--

CREATE TABLE donation (
  donation_id int UNSIGNED NOT NULL,
  amount int UNSIGNED NOT NULL,
  donor_id int UNSIGNED NOT NULL,
  timestamp datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table donation
--

INSERT INTO donation (donation_id, amount, donor_id, timestamp) VALUES
(11, 1000, 1, '2024-03-05 10:00:00'),
(12, 300, 2, '2024-03-10 12:30:00'),
(13, 2000, 3, '2024-03-10 12:31:00'),
(14, 500, 4, '2024-03-10 12:32:00'),
(15, 200, 5, '2024-03-10 12:33:00'),
(16, 10000, 6, '2024-03-10 12:34:00'),
(17, 5000, 1, '2024-03-15 14:00:00');

-- --------------------------------------------------------

--
-- Table structure for table donors
--

CREATE TABLE donors (
  donor_id int UNSIGNED NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  org_name varchar(255) DEFAULT NULL,
  anonymous tinyint(1) NOT NULL,
  email varchar(255) NOT NULL,
  phone varchar(255) NOT NULL,
  donate_amount int DEFAULT NULL,
  donate_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table donors
--

INSERT INTO donors (donor_id, first_name, last_name, org_name, anonymous, email, phone, donate_amount, donate_date) VALUES
(1, 'A', 'Smith', NULL, 0, 'a.smith@example.com', '123-456-7890', NULL, '2025-03-05 13:04:56'),
(2, 'B', 'Johnson', NULL, 0, 'b.johnson@example.com', '234-567-8901', NULL, '2025-03-05 13:04:56'),
(3, 'C', 'Brown', NULL, 1, 'c.brown@example.com', '345-678-9012', NULL, '2025-03-05 13:04:56'),
(4, 'D', 'Williams', NULL, 0, 'd.williams@example.com', '456-789-0123', NULL, '2025-03-05 13:04:56'),
(5, 'E', 'Miller', NULL, 1, 'e.miller@example.com', '567-890-1234', NULL, '2025-03-05 13:04:56'),
(6, 'F', 'Davis', NULL, 0, 'f.davis@example.com', '678-901-2345', NULL, '2025-03-05 13:04:56');

-- --------------------------------------------------------

--
-- Table structure for table event
--

CREATE TABLE `event` (
  event_id int UNSIGNED NOT NULL,
  event_title varchar(255) NOT NULL,
  event_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  event_detail varchar(2000) NOT NULL,
  event_location varchar(255) NOT NULL,
  event_content varchar(2550) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table event
--

INSERT INTO event (event_id, event_title, event_date, event_detail, event_location, event_content) VALUES
(6, 'Charity Marathon 2024', '2025-03-05 13:20:44', 'Annual charity marathon for fundraising.', 'Museum London', 'The Charity Marathon 2024 is more than just a run—it’s a powerful gathering of community members united for a shared cause. Hosted at the scenic Museum London, the event will welcome runners of all ages and skill levels to participate in a city-wide marathon aimed at raising funds for critical local charities. From early morning stretches to the exciting starting gun, participants will experience a day full of energy, unity, and purpose. Spectators and supporters will line the streets, cheering on runners and joining side activities including wellness booths, food trucks, and live entertainment. Proceeds from registration, merchandise, and donations will go directly to nonprofit organizations supporting health services, shelter programs, and educational outreach. The event also serves as a platform to promote healthy lifestyles and encourage volunteerism in the community. Participants will receive commemorative medals and event shirts, making the day memorable beyond the finish line. With growing interest and media coverage, this year’s marathon is expected to attract record-breaking attendance. Charity Marathon 2024 is not just about crossing physical finish lines—it’s about making meaningful strides toward a better, more compassionate future for everyone.'),
(7, 'Community Cleanup Day', '2025-03-05 13:24:55', 'A community-driven event to clean local parks and streets.', 'The Marconi Club of London', 'Community Cleanup Day invites citizens from all walks of life to come together and care for the spaces they call home. Centered around The Marconi Club of London, this volunteer-driven initiative mobilizes local residents, students, environmental groups, and families to participate in revitalizing public areas. Volunteers are assigned to clean local parks, sidewalks, and riverbanks, as well as plant new greenery and install eco-friendly waste bins. The goal is to foster environmental stewardship and increase public awareness of sustainability practices. In addition to physical cleanup efforts, workshops will be held on waste management, composting, and reducing single-use plastics. Children will also have the chance to join supervised mini-activities, including educational games and art projects using recycled materials. Community Cleanup Day encourages civic pride and reinforces the message that small actions can have large environmental impacts. Refreshments and recognition certificates will be provided to all participants. It’s more than a cleanup—it’s a statement of care, cooperation, and collective responsibility for the health of the city and the planet.'),
(8, 'Food Drive 2024', '2025-03-05 13:25:24', 'A charity food drive to support families in need.', 'Bellamere Winery', 'Food Drive 2024, held at the beautiful Bellamere Winery, is a heartfelt response to growing food insecurity in the region. This annual event brings people together to donate non-perishable food items, hygiene products, and basic necessities, which will be distributed to local food banks and shelters. Visitors are encouraged to bring donations in exchange for complimentary tastings, vineyard tours, and family-friendly activities including hay rides and live acoustic music. With the theme “Nourish Our Neighbours,” the drive highlights how individual generosity can collectively support families in need. Several local businesses and farms are partnering to match donations, doubling the impact. The event also features storytelling sessions where food bank recipients share how community support changed their lives. It creates a deeper emotional connection to the act of giving. Volunteers will be on-site to help collect, sort, and pack goods. Food Drive 2024 is more than a charitable event—it’s a celebration of compassion and togetherness. With every can collected and every dollar raised, the community takes another step toward ensuring that no family has to go hungry.'),
(9, 'Holiday Gift Giving', '2025-03-05 13:25:42', 'Bringing joy to underprivileged children during the holiday season.', 'Grand Theatre', 'The Holiday Gift Giving event at the Grand Theatre is a magical evening dedicated to bringing joy to underprivileged children during the festive season. Organized by a coalition of local charities, schools, and businesses, the event ensures that children from low-income families receive thoughtful gifts tailored to their interests and needs. Community members can participate by sponsoring a child, donating new toys, clothing, books, or art supplies, or volunteering to help wrap and deliver the gifts. The Grand Theatre transforms into a winter wonderland, complete with a cozy cocoa corner, holiday crafts, and live performances from school choirs and local musicians. Families are invited to enjoy the festive atmosphere, where kids can meet Santa Claus and receive their personalized gifts. Emotional moments often unfold as children light up with joy and gratitude. This initiative not only brings holiday cheer but also restores a sense of hope and belonging to families who may be struggling. Each gift given is a symbol of care, inclusion, and community solidarity. The Holiday Gift Giving event proves that the true spirit of the season lives in acts of generosity and love shared among neighbours.'),
(10, 'Veterans Appreciation Night', '2025-04-30 12:16:39', 'Veterans Appreciation Night is a heartfelt tribute to the men and women who have served in Canada’s armed forces. Taking place at the prestigious London Convention Centre', 'London Convention Centre', 'Veterans Appreciation Night is a heartfelt tribute to the men and women who have served in Canada’s armed forces. Taking place at the prestigious London Convention Centre, this evening of gratitude brings together veterans, their families, and community members for a memorable night of recognition, remembrance, and connection. The event features a formal dinner, musical performances by local artists, and speeches from respected military leaders and civic officials. A highlight of the night is the “Story Circle,” where veterans are invited to share personal anecdotes from their service—some emotional, others humorous, but all powerful reminders of their sacrifices.\r\n\r\nVisual installations—including a timeline of military milestones and a wall of honor featuring veteran portraits—help guests connect with the personal and historical significance of the evening. Guests will also receive commemorative pins and thank-you cards made by local schoolchildren. This event not only honors past service but also aims to strengthen ongoing support for veterans’ programs, including mental health services and reintegration initiatives. Community organizations will be present with information booths for those seeking resources or looking to get involved. Veterans Appreciation Night is more than a ceremony—it’s a statement that their service will never be forgotten.');

-- --------------------------------------------------------

--
-- Table structure for table image
--

CREATE TABLE image (
  image_id int UNSIGNED NOT NULL,
  image_type tinyint UNSIGNED NOT NULL,
  image_alt varchar(255) NOT NULL,
  image_name varchar(255) NOT NULL,
  image_link varchar(255) NOT NULL,
  blog_id int UNSIGNED DEFAULT NULL,
  event_id int UNSIGNED DEFAULT NULL,
  war_letter_id int UNSIGNED DEFAULT NULL,
  testimonial_id int UNSIGNED DEFAULT NULL,
  receipt_id int UNSIGNED DEFAULT NULL,
  sponsorship_id int UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table image
--

INSERT INTO image (image_id, image_type, image_alt, image_name, image_link, blog_id, event_id, war_letter_id, testimonial_id, receipt_id, sponsorship_id) VALUES
(18, 1, 'Event Audience', 'event_audience', 'event-6.jpg', NULL, 6, NULL, NULL, NULL, NULL),
(19, 1, 'Cleanup Volunteers', 'cleanup_volunteers', 'event-7.jpg', NULL, 7, NULL, NULL, NULL, NULL),
(22, 1, 'Food Donations', 'food_donations', 'event-8.jpg', NULL, 8, NULL, NULL, NULL, NULL),
(25, 1, 'Gift Wrapping Volunteers', 'gift_wrapping_volunteers', 'event-9.jpg', NULL, 9, NULL, NULL, NULL, NULL),
(28, 2, 'Blog 1 Thumbnail', 'blog1_thumb', 'uploads/blog1_thumb.jpg', 1, NULL, NULL, NULL, NULL, NULL),
(29, 2, 'Blog 1 Cover', 'blog1_cover', '32_halftone.png', 1, NULL, NULL, NULL, NULL, NULL),
(30, 2, 'Blog 2 Thumbnail', 'blog2_thumb', 'uploads/blog2_thumb.jpg', 2, NULL, NULL, NULL, NULL, NULL),
(31, 2, 'Blog 2 Illustration', 'blog2_illustration', 'brother_pic_main_leafs.png', 2, NULL, NULL, NULL, NULL, NULL),
(32, 2, 'Blog 3 Thumbnail', 'blog3_thumb', 'uploads/blog3_thumb.jpg', 3, NULL, NULL, NULL, NULL, NULL),
(33, 2, 'Blog 3 Header', 'blog3_header', 'uploads/blog3_header.jpg', 3, NULL, NULL, NULL, NULL, NULL),
(34, 2, 'Blog 4 Banner', 'blog4_banner', 'blog4_banner.jpg', 4, NULL, NULL, NULL, NULL, NULL),
(35, 2, 'Blog 4 Featured', 'blog4_featured', 'uploads/blog4_featured.jpg', 4, NULL, NULL, NULL, NULL, NULL),
(36, 2, 'Blog 5 Thumbnail', 'blog5_thumb', 'uploads/blog5_thumb.jpg', 5, NULL, NULL, NULL, NULL, NULL),
(37, 2, 'Blog 5 Background', 'blog5_background', 'uploads/blog5_background.jpg', 5, NULL, NULL, NULL, NULL, NULL),
(58, 2, 'Testimonial from John Doe', 'john_doe_testimonial', 'uploads/john_doe.jpg', NULL, NULL, NULL, 1, NULL, NULL),
(59, 2, 'Testimonial from Jane Smith', 'jane_smith_testimonial', 'uploads/jane_smith.jpg', NULL, NULL, NULL, 2, NULL, NULL),
(60, 2, 'Testimonial from Michael Brown', 'michael_brown_testimonial', 'uploads/michael_brown.jpg', NULL, NULL, NULL, 3, NULL, NULL),
(61, 2, 'Testimonial from Emily Johnson', 'emily_johnson_testimonial', 'uploads/emily_johnson.jpg', NULL, NULL, NULL, 4, NULL, NULL),
(62, 2, 'Testimonial from Robert Wilson', 'robert_wilson_testimonial', 'uploads/robert_wilson.jpg', NULL, NULL, NULL, 5, NULL, NULL),
(63, 1, 'Fanshawe College', 'Fanshawe-logo', 'fanshawe-college-logo.png', NULL, NULL, NULL, NULL, NULL, 1),
(64, 1, 'Canada', 'Canada-logo', 'canada-logo.png', NULL, NULL, NULL, NULL, NULL, 7),
(67, 1, 'London Canada', 'London-Logo', 'london-logo.png', NULL, NULL, NULL, NULL, NULL, 5),
(68, 1, 'Srishti Logo', 'Shrshti-logo', 'shrishti-logo.png', NULL, NULL, NULL, NULL, NULL, 2),
(69, 1, 'Frederick Hall', 'Frederick Hall', 'frederick-hall.png', NULL, NULL, NULL, NULL, 1, NULL),
(70, 1, 'Colin Barron', 'Colin Barron', 'colin-barron.png', NULL, NULL, NULL, NULL, 2, NULL),
(71, 1, 'James Richardson', 'James Richardson', 'james-richardson.png', NULL, NULL, NULL, NULL, 3, NULL),
(72, 1, 'Wallace Algie', 'Wallace Algie', 'wallace-algie.png', NULL, NULL, NULL, NULL, 4, NULL),
(73, 1, 'Harry Brown', 'Harry Brown', 'harry-brown.png', NULL, NULL, NULL, NULL, 5, NULL),
(74, 1, 'John Pattison', 'John Pattison', 'john-pattison.png', NULL, NULL, NULL, NULL, 6, NULL),
(75, 1, 'Khudadad Khan', 'Khudadad Khan', 'khudadad-khan.png', NULL, NULL, NULL, NULL, 7, NULL),
(76, 1, 'Gobind Singh', 'Gobind Singh', 'gobind-singh.png', NULL, NULL, NULL, NULL, 8, NULL),
(77, 1, 'Naik Shahamad', 'Naik Shahamad', 'naik-shahamad.png', NULL, NULL, NULL, NULL, 9, NULL),
(78, 1, 'Karanbahadur Rana', 'Karanbahadur Rana', 'karanbahadur.png', NULL, NULL, NULL, NULL, 10, NULL),
(79, 1, 'Darwan Singh', 'Darwan Singh', 'darwan-singh.png', NULL, NULL, NULL, NULL, 11, NULL),
(80, 1, 'Kickoff Meeting Sets Vision in Motion', 'Kickoff Meeting Sets Vision in Motion', 'blog-1.jpg', 1, NULL, NULL, NULL, NULL, NULL),
(81, 1, 'Local Veteran Shared His Story', 'Local Veteran Shared His Story', 'blog-2.jpg', 2, NULL, NULL, NULL, NULL, NULL),
(82, 1, 'Exhibit Design Enter Prototype Phase', 'Exhibit Design Enter Prototype Phase', 'blog-3.jpg', 3, NULL, NULL, NULL, NULL, NULL),
(83, 1, 'Student Volunteers Join the Mission', 'Student Volunteers Join the Mission', 'blog-4.jpg', 4, NULL, NULL, NULL, NULL, NULL),
(84, 1, 'Historic Letters Uncovered in Archive', 'Historic Letters Uncovered in Archive', 'blog-5.jpg', 5, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table milestone
--

CREATE TABLE milestone (
  milestone_id int UNSIGNED NOT NULL,
  milestone_name varchar(255) NOT NULL,
  target int NOT NULL,
  archived_time datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table milestone
--

INSERT INTO milestone (milestone_id, milestone_name, target, archived_time) VALUES
(1, 'Initial Fundraising Goal: Community Park Planning', 10000, '2024-02-01 10:00:00'),
(2, 'Land Acquisition for Public Park', 30000, '2024-04-15 14:30:00'),
(3, 'Basic Infrastructure Development (Paths & Seating)', 50000, '2024-06-20 09:00:00'),
(4, 'Playground and Greenery Expansion', 100000, '2024-09-10 16:45:00'),
(5, 'Completion of the Full Community Park', 200000, '2025-01-01 12:00:00');

-- --------------------------------------------------------

--
-- Table structure for table participate
--

CREATE TABLE participate (
  participate_id int UNSIGNED NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  phone varchar(255) NOT NULL,
  optin tinyint(1) NOT NULL,
  event_id int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table participate
--

INSERT INTO participate (participate_id, first_name, last_name, email, phone, optin, event_id) VALUES
(9, 'Alice', 'Johnson', 'alice@example.com', '123-456-7890', 1, 6),
(10, 'Bob', 'Smith', 'bob@example.com', '234-567-8901', 0, 6),
(11, 'Charlie', 'Brown', 'charlie@example.com', '345-678-9012', 1, 6),
(12, 'David', 'Wilson', 'david@example.com', '456-789-0123', 1, 8),
(13, 'Emma', 'Taylor', 'emma@example.com', '567-890-1234', 0, 7),
(14, 'Frank', 'Miller', 'frank@example.com', '678-901-2345', 1, 7),
(15, 'Grace', 'Harris', 'grace@example.com', '789-012-3456', 1, 8),
(16, 'Henry', 'Clark', 'henry@example.com', '890-123-4567', 0, 9);

-- --------------------------------------------------------

--
-- Table structure for table sponsorship
--

CREATE TABLE sponsorship (
  sponsorship_id int UNSIGNED NOT NULL,
  sponsorship_name varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table sponsorship
--

INSERT INTO sponsorship (sponsorship_id, sponsorship_name) VALUES
(1, 'Fanshawe College'),
(2, 'Srishti'),
(5, 'London Canada'),
(7, 'Canada');

-- --------------------------------------------------------

--
-- Table structure for table subscription
--

CREATE TABLE subscription (
  subscriber_id int UNSIGNED NOT NULL,
  last_name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  subscribed_date datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table testimonial
--

CREATE TABLE testimonial (
  testimonial_id int UNSIGNED NOT NULL,
  testimonial_name varchar(255) NOT NULL,
  testimonial_org varchar(255) DEFAULT NULL,
  testimonial_msg varchar(1000) NOT NULL,
  testimonial_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table testimonial
--

INSERT INTO testimonial (testimonial_id, testimonial_name, testimonial_org, testimonial_msg, testimonial_date) VALUES
(1, 'John Doe', 'Veteran Support Group', 'This organization has changed my life. Their support has been invaluable.', '2025-03-05 13:47:07'),
(2, 'Jane Smith', 'Military Families United', 'I am truly grateful for the help and community I found here.', '2025-03-05 13:47:07'),
(3, 'Michael Brown', 'Wounded Heroes Foundation', 'The support and resources provided here are life-changing.', '2025-03-05 13:47:07'),
(4, 'Emily Johnson', 'Bravery Foundation', 'Thanks to this amazing community, I have found new strength and purpose.', '2025-03-05 13:47:07'),
(5, 'Robert Wilson', 'Soldiers Hope', 'I can’t express my gratitude enough. This place is a beacon of hope for many.', '2025-03-05 13:47:07');

-- --------------------------------------------------------

--
-- Table structure for table victoria_crosses
--

CREATE TABLE victoria_crosses (
  receipt_id int UNSIGNED NOT NULL,
  name text,
  unit text,
  battle text,
  country text,
  actions text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table victoria_crosses
--

INSERT INTO victoria_crosses (receipt_id, name, unit, battle, country, actions) VALUES
(1, 'Company Sergeant Major Frederick Hall', '8th Battalion CEF, Royal Winnipeg Rifles', 'Ypres, April 1915', 'Canada', '[\"Risked his life repeatedly to rescue wounded soldiers from No Man’s Land.\", \"Shot in the head while dragging a soldier to safety.\", \"Posthumously awarded the Victoria Cross for his sacrifice.\"]'),
(2, 'Corporal Colin Barron', '3rd Battalion CEF', 'Passchendaele, November 1917', 'Canada', '[\"Single-handedly took out three German machine-gun nests, saving his company.\", \"Captured enemy soldiers without reinforcements.\"]'),
(3, 'Piper James Richardson', '16th Battalion CEF', 'Somme, October 1916', 'Canada', '[\"Played his bagpipes under heavy fire, inspiring Canadian troops to victory.\", \"Returned to retrieve his bagpipes and was later found dead near a farmhouse.\"]'),
(4, 'Lieutenant Wallace Algie', '20th Battalion CEF', 'Cambrai, October 1918', 'Canada', '[\"Single-handedly took out three German machine-gun nests, saving his company.\", \"Captured enemy soldiers without reinforcements.\"]'),
(5, 'Private Harry Brown', '10th Battalion CEF', 'Loos, August 1917', 'Canada', '[\"Carried a crucial message through enemy fire, despite being critically wounded.\", \"Delivered his message before falling unconscious and later died from his injuries.\"]'),
(6, 'Private John Pattison', '50th Battalion CEF', 'Vimy Ridge, July 1917', 'Canada', '[\"Charged a machine-gun post alone, using grenades and a bayonet to neutralize the enemy.\", \"Killed all five machine gunners, securing a key victory at Vimy Ridge.\"]'),
(7, 'Khudadad Khan', '129th Baluchis', 'First Battle of Ypres, October 1914', 'India', '[\"Single-handedly manned a machine gun, holding off advancing German forces.\", \"Survived despite severe injuries and became the first Indian Victoria Cross recipient.\"]'),
(8, 'Gobind Singh', '28th Light Cavalry', 'France, 1917', 'India', '[\"Delivered vital messages under intense enemy fire, ensuring reinforcements arrived.\", \"Crossed No Man’s Land three times while being targeted.\"]'),
(9, 'Naik Shahamad Khan', '89th Punjabis', 'Mesopotamia, April 1916', 'India', '[\"Defended his post alone, fighting off overwhelming numbers of enemy soldiers.\"]'),
(10, 'Karanbahadur Rana', '2nd Battalion, 3rd Queen Alexandra’s Gurkha Rifles', '1918', 'India', '[\"Captured key enemy positions by charging into their trenches.\"]'),
(11, 'Darwan Singh Negi', '39th Garhwal Rifles', 'November 1914', 'India', '[\"Led his men through enemy fire, storming German trenches with bayonets.\", \"One of the first Indian soldiers to receive the Victoria Cross.\"]');

-- --------------------------------------------------------

--
-- Table structure for table volunteer
--

CREATE TABLE volunteer (
  volunteer_id int UNSIGNED NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  volunteer_role tinyint UNSIGNED NOT NULL,
  email varchar(255) NOT NULL,
  phone varchar(255) NOT NULL,
  address varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table volunteer
--

INSERT INTO volunteer (volunteer_id, first_name, last_name, volunteer_role, email, phone, address) VALUES
(1, 'Alice', 'Johnson', 1, 'alice.johnson@example.com', '123-456-7890', '123 Maple St, Springfield, IL'),
(2, 'Brian', 'Smith', 2, 'brian.smith@example.com', '234-567-8901', '456 Oak Ave, Denver, CO'),
(3, 'Catherine', 'Lee', 3, 'catherine.lee@example.com', '345-678-9012', '789 Pine Rd, Austin, TX');

-- --------------------------------------------------------

--
-- Table structure for table war_letters
--

CREATE TABLE war_letters (
  letter_id int UNSIGNED NOT NULL,
  name text,
  location text,
  event text,
  quote text,
  context text,
  date date DEFAULT NULL,
  country text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table war_letters
--

INSERT INTO war_letters (letter_id, name, location, event, quote, context, date, country) VALUES
(11, 'Lt. Hart Leech', 'Winnipeg, Canada', NULL, 'Just a wee note. I am going over the parapet, and the chances of a \'sub\' getting back alive are about nix. If I do get back, you can give me the horse laugh. If not, this\'ll let you know that I kicked out with my boots on.', 'Final Letter to His Mother (Before Battle)', NULL, 'Canada'),
(12, 'Fred Adams', NULL, 'Second Battle of Ypres', 'This is the first day they have allowed us to write letters since this battle began. We have lost an awful lot of our fellows. To those of us who are left, it seems just a miracle that any of us came through alive. It was just a nightmare—a hell—retreating across the ground, with shrapnel raining down upon us and bullets striking everywhere. We could see the boys falling, and it was just awful to hear them cry out.', 'Witnessing the First Gas Attack', NULL, 'Canada'),
(13, 'Cpl. Amos Mayse', 'Trenches in France', NULL, 'Talk about the \'glory of war\'—there is no glory, it is hellish, devilish. We saw places where the trenches were blood-soaked and shell holes filled with blood and water still stood in them.', 'The Harsh Reality of War', NULL, 'Canada'),
(14, 'Capt. Charles Robertson', NULL, 'Battle of Vimy Ridge', 'The bullets never stopped. Pop-pop-pop—on the right, on the left, behind, underneath. The ceaseless sound reminded us every moment that there was a war on. Believe me, I had no idea you could do so many things with an aeroplane. I tried them all, just hoping to get that old bus safe on terra firma again.', 'Aerial Combat', NULL, 'Canada'),
(15, 'A Wounded Sikh Soldier', NULL, NULL, 'Tell my mother not to go wandering madly because her son, my brother, is dead. To be born and to die is God\'s order. Some day we must die, sooner or later. If I die here, who will remember me? It is a fine thing to die far from home.', 'To His Father', '1915-01-18', 'India'),
(16, 'A Punjabi Rajput Soldier', NULL, NULL, 'Do not think that this is war. This is not war. It is the ending of the world.', 'Witnessing Devastation', '1915-01-29', 'India'),
(17, 'A Rifleman of the 20th Deccan Horse', NULL, NULL, 'What I saw in the course of the advance, I shall never forget.', 'Before Battle', '1916-07-14', 'India'),
(18, 'Jemadar Indar Singh', NULL, NULL, 'Don\'t grieve at my death, because I shall die arms in hand, wearing the warrior\'s clothes. This is the happiest death anyone can die. Give my love to my parents and tell them not to grieve—we must all die someday. Indeed, this day of death is an occasion for rejoicing.', 'A Warrior’s Goodbye', '1916-09-15', 'India');

--
-- Indexes for dumped tables
--

--
-- Indexes for table blog
--
ALTER TABLE blog
  ADD PRIMARY KEY (blog_id);

--
-- Indexes for table contact
--
ALTER TABLE contact
  ADD PRIMARY KEY (contact_id);

--
-- Indexes for table donate_tier
--
ALTER TABLE donate_tier
  ADD PRIMARY KEY (tier_id);

--
-- Indexes for table donation
--
ALTER TABLE donation
  ADD PRIMARY KEY (donation_id),
  ADD KEY fk_donor (donor_id);

--
-- Indexes for table donors
--
ALTER TABLE donors
  ADD PRIMARY KEY (donor_id);

--
-- Indexes for table event
--
ALTER TABLE event
  ADD PRIMARY KEY (event_id);

--
-- Indexes for table image
--
ALTER TABLE image
  ADD PRIMARY KEY (image_id),
  ADD KEY fk_image_blog (blog_id),
  ADD KEY fk_image_event (event_id),
  ADD KEY fk_image_soldier_letter (war_letter_id),
  ADD KEY fk_image_testimonial (testimonial_id),
  ADD KEY receipt_id (receipt_id),
  ADD KEY fk_sponsorship_image (sponsorship_id);

--
-- Indexes for table milestone
--
ALTER TABLE milestone
  ADD PRIMARY KEY (milestone_id);

--
-- Indexes for table participate
--
ALTER TABLE participate
  ADD PRIMARY KEY (participate_id),
  ADD KEY fk_participate_event (event_id);

--
-- Indexes for table sponsorship
--
ALTER TABLE sponsorship
  ADD PRIMARY KEY (sponsorship_id);

--
-- Indexes for table subscription
--
ALTER TABLE subscription
  ADD PRIMARY KEY (subscriber_id);

--
-- Indexes for table testimonial
--
ALTER TABLE testimonial
  ADD PRIMARY KEY (testimonial_id);

--
-- Indexes for table victoria_crosses
--
ALTER TABLE victoria_crosses
  ADD PRIMARY KEY (receipt_id);

--
-- Indexes for table volunteer
--
ALTER TABLE volunteer
  ADD PRIMARY KEY (volunteer_id);

--
-- Indexes for table war_letters
--
ALTER TABLE war_letters
  ADD PRIMARY KEY (letter_id);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table blog
--
ALTER TABLE blog
  MODIFY blog_id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table contact
--
ALTER TABLE contact
  MODIFY contact_id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table donate_tier
--
ALTER TABLE donate_tier
  MODIFY tier_id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table donation
--
ALTER TABLE donation
  MODIFY donation_id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table donors
--
ALTER TABLE donors
  MODIFY donor_id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table event
--
ALTER TABLE event
  MODIFY event_id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table image
--
ALTER TABLE image
  MODIFY image_id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table milestone
--
ALTER TABLE milestone
  MODIFY milestone_id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table participate
--
ALTER TABLE participate
  MODIFY participate_id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table sponsorship
--
ALTER TABLE sponsorship
  MODIFY sponsorship_id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table subscription
--
ALTER TABLE subscription
  MODIFY subscriber_id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table testimonial
--
ALTER TABLE testimonial
  MODIFY testimonial_id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table victoria_crosses
--
ALTER TABLE victoria_crosses
  MODIFY receipt_id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table volunteer
--
ALTER TABLE volunteer
  MODIFY volunteer_id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table war_letters
--
ALTER TABLE war_letters
  MODIFY letter_id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table donation
--
ALTER TABLE donation
  ADD CONSTRAINT fk_donor FOREIGN KEY (donor_id) REFERENCES donors (donor_id) ON DELETE CASCADE;

--
-- Constraints for table image
--
ALTER TABLE image
  ADD CONSTRAINT fk_image_blog FOREIGN KEY (blog_id) REFERENCES blog (blog_id) ON DELETE CASCADE,
  ADD CONSTRAINT fk_image_event FOREIGN KEY (event_id) REFERENCES `event` (event_id) ON DELETE CASCADE,
  ADD CONSTRAINT fk_image_soldier_letter FOREIGN KEY (war_letter_id) REFERENCES war_letters (letter_id) ON DELETE CASCADE,
  ADD CONSTRAINT fk_image_testimonial FOREIGN KEY (testimonial_id) REFERENCES testimonial (testimonial_id) ON DELETE CASCADE,
  ADD CONSTRAINT fk_sponsorship_image FOREIGN KEY (sponsorship_id) REFERENCES sponsorship (sponsorship_id) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT receipt_id FOREIGN KEY (receipt_id) REFERENCES victoria_crosses (receipt_id) ON DELETE CASCADE;

--
-- Constraints for table participate
--
ALTER TABLE participate
  ADD CONSTRAINT fk_participate_event FOREIGN KEY (event_id) REFERENCES `event` (event_id) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
