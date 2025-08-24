-- Seed data for ReevaTech website

-- Insert sample services
INSERT INTO services (name, description, category, features, is_active, sort_order) VALUES
('HVAC Installation', 'Complete heating, ventilation, and air conditioning system installation for commercial and residential properties.', 'hvac', ARRAY['System Design', 'Professional Installation', 'Testing & Commissioning', '24/7 Support'], true, 1),
('HVAC Maintenance', 'Regular maintenance and servicing to ensure optimal performance and longevity of your HVAC systems.', 'hvac', ARRAY['Preventive Maintenance', 'Emergency Repairs', 'Performance Optimization', 'Energy Efficiency Audits'], true, 2),
('Commercial Kitchen Setup', 'Complete commercial kitchen equipment installation and setup for restaurants, hotels, and food service businesses.', 'kitchen_equipment', ARRAY['Equipment Selection', 'Layout Design', 'Installation & Setup', 'Staff Training'], true, 3),
('Kitchen Equipment Maintenance', 'Professional maintenance and repair services for all types of commercial kitchen equipment.', 'kitchen_equipment', ARRAY['Regular Servicing', 'Emergency Repairs', 'Parts Replacement', 'Performance Monitoring'], true, 4);

-- Insert sample portfolio projects
INSERT INTO portfolio_projects (title, description, category, client_name, location, completion_date, featured) VALUES
('Luxury Hotel HVAC System', 'Complete HVAC installation for a 200-room luxury hotel including central air conditioning, heating, and ventilation systems.', 'hvac', 'Grand Palace Hotel', 'Mumbai, India', '2024-06-15', true),
('Restaurant Kitchen Setup', 'Full commercial kitchen equipment installation for a fine dining restaurant including cooking equipment, refrigeration, and ventilation.', 'kitchen', 'Spice Garden Restaurant', 'Delhi, India', '2024-05-20', true),
('Office Complex HVAC', 'Energy-efficient HVAC system installation for a 10-story office complex with smart climate control.', 'hvac', 'Tech Tower Business Park', 'Bangalore, India', '2024-04-10', false),
('Hospital Kitchen Facility', 'Specialized kitchen equipment setup for a 500-bed hospital including dietary preparation and food service areas.', 'kitchen', 'City General Hospital', 'Chennai, India', '2024-03-25', true);

-- Insert sample testimonials
INSERT INTO testimonials (client_name, company, testimonial, rating, project_type, is_featured) VALUES
('Rajesh Kumar', 'Grand Palace Hotel', 'ReevaTech delivered an exceptional HVAC system that has significantly improved our guest comfort while reducing energy costs. Their professional team completed the project on time and within budget.', 5, 'HVAC Installation', true),
('Priya Sharma', 'Spice Garden Restaurant', 'The commercial kitchen setup by ReevaTech transformed our restaurant operations. The equipment selection and installation were perfect for our needs. Highly recommended!', 5, 'Kitchen Equipment', true),
('Amit Patel', 'Tech Tower Business Park', 'Outstanding service and expertise in HVAC systems. The smart climate control system they installed has improved our office environment tremendously.', 4, 'HVAC Installation', false),
('Dr. Sarah Wilson', 'City General Hospital', 'ReevaTech''s specialized approach to hospital kitchen equipment was impressive. They understood our unique requirements and delivered a world-class facility.', 5, 'Kitchen Equipment', true);

-- Insert sample newsletter subscribers (for testing)
INSERT INTO newsletter_subscribers (email, name) VALUES
('admin@reevatech.com', 'ReevaTech Admin'),
('info@reevatech.com', 'ReevaTech Info');
